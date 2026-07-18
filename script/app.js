import { TodoStorage } from "../script/storage.js";

// DOM 캐싱
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const filterGroup = document.getElementById("filter-group");
const totalCount = document.getElementById("total-count");
const completedCount = document.getElementById("completed-count");
const quoteEl = document.getElementById("quote");
const clearCompletedBtn = document.getElementById("clear-completed-btn");
const clearAllBtn = document.getElementById("clear-all-btn");

let currentFilter = "all";

function render() {
  const currentItems = TodoStorage.getTodos(currentFilter);

  // 1. 할일 목록
  todoList.innerHTML = currentItems
    .map(
      (todo) => `
    <li class="todo-item" data-id="${todo.id}">
      <label>
        <input type="checkbox" class="toggle-chk" ${
          todo.completed ? "checked" : ""
        }>
        <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
      </label>
      <button class="delete-btn red">✕</button>
    </li>
  `
    )
    .join("");

  // 2. 하단 통계 정보 갱신
  const { total, completed } = TodoStorage.getSummary();
  totalCount.textContent = total;
  completedCount.textContent = completed;
}

function handleAddTodo() {
  const text = todoInput.value.trim();
  if (!text) return; // 빈 값 입력 차단(방지)

  TodoStorage.addTodo(text);
  todoInput.value = ""; // 입력창 초기화
  render();
}

todoList.addEventListener("click", (e) => {
  const li = e.target.closest(".todo-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  // A. 체크박스 클릭 시 (완료 토글)
  if (e.target.classList.contains("toggle-chk")) {
    TodoStorage.toggleTodo(id);
    render();
  }

  // B. 삭제 버튼 클릭 시 (항목 삭제)
  if (e.target.classList.contains("delete-btn")) {
    TodoStorage.deleteTodo(id);
    render();
  }
});

// 추가 버튼 클릭 및 Enter 키 지원
addBtn.addEventListener("click", handleAddTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAddTodo();
});

// 필터 버튼 그룹 탭 전환 전환
filterGroup.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  // 활성화 스타일 클래스 이전
  filterGroup
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  currentFilter = e.target.dataset.filter;
  render();
});

// 💡 완료 삭제 버튼 클릭 이벤트
clearCompletedBtn.addEventListener("click", () => {
  const { completed } = TodoStorage.getSummary();

  // 완료된 항목이 0개일 때는 실행할 필요가 없으므로 방어 처리
  if (completed === 0) {
    alert("삭제할 완료된 할 일이 없습니다.");
    return;
  }

  // 실수를 방지하기 위한 확인창
  if (confirm(`완료된 ${completed}개의 할 일을 목록에서 삭제하시겠습니까?`)) {
    TodoStorage.clearCompleted(); // 데이터 모듈에서 완료 항목 정리
    render(); // 화면 갱신
  }
});

clearAllBtn.addEventListener("click", () => {
  // 아무것도 없을 때는 실행 방지
  const { total } = TodoStorage.getSummary();
  if (total === 0) {
    alert("삭제할 할 일이 없습니다.");
    return;
  }

  // 실수를 방지하기 위한 더블 체크
  if (
    confirm(
      "정말로 모든 할 일 목록을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다."
    )
  ) {
    TodoStorage.clearAll(); // 데이터 모듈 비우기
    render(); // 화면 새로고침(Draw)
  }
});

// 오늘의 한마디
async function loadTodayQuote() {
  try {
    const response = await fetch(
      "https://korean-advice-open-api.vercel.app/api/advice"
    );

    if (!response.ok) {
      throw new Error(`HTTP 에러 발생! 상태코드: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.message) {
      quoteEl.textContent = `💬 "${data.message}" - ${data.author || "익명"}`;
    } else {
      throw new Error("올바르지 않은 데이터 규격입니다.");
    }
  } catch (error) {
    quoteEl.textContent = "💡 오늘의 한 걸음이 내일의 큰 결실을 맺을 거예요.";
    console.warn("명언 로드 실패로 인한 기본 문구 대체:", error.message);
  }
}

loadTodayQuote();
render();
