const STORAGE_KEY = "vjs_todo_list";

// 초기 로드 시 기존 데이터를 복원하거나 빈 배열 생성
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export const TodoStorage = {
  // 전체 가져오기
  getTodos(filter = "all") {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  },

  // 요약 개수 정보 계산
  getSummary() {
    return {
      total: todos.length,
      completed: todos.filter((t) => t.completed).length,
    };
  },

  // 신규 할 일 추가
  addTodo(text) {
    const newTodo = {
      id: Date.now(), // 고유 ID 발급
      text,
      completed: false,
    };
    todos.push(newTodo);
    saveToStorage();
    return newTodo;
  },

  // 완료 상태 토글
  toggleTodo(id) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveToStorage();
  },

  // 할 일 삭제
  deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveToStorage();
  },

  // 💡 완료된(선택된) 할 일만 골라서 지우기
  clearCompleted() {
    // 완료되지 않은 항목(진행중)들만 필터링하여 남김
    todos = todos.filter((todo) => !todo.completed);
    saveToStorage();
  },

  // 💡 모든 할 일 싹 지우기
  clearAll() {
    todos = []; // 배열 비우기
    saveToStorage(); // localStorage에 빈 배열 반영
  },
};
