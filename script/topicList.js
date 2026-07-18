// ../script/topicList.js

// 💡 함수로 분리하여 원하는 타이밍에 실행할 수 있도록 만듭니다.
export function renderTopicList() {
  const topicList = document.querySelector(".topic-list");
  if (!topicList) return;

  const targets = document.querySelectorAll(".topic");
  console.log("찾은 토픽 개수:", targets.length); // 🔍 디버깅용 로그

  if (targets.length === 0) return;

  topicList.innerHTML = "";

  targets.forEach((target) => {
    const id = target.id;
    let title = target.getAttribute("data-title");

    if (!title) {
      const heading = target.querySelector("h1, h2, h3, figcaption");
      title = heading ? heading.textContent.trim() : "상세 보기";
    }

    if (!id) {
      console.warn("목차로 연결할 요소에 id 속성이 없습니다:", target);
      return;
    }

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${id}`;
    a.textContent = title;

    li.appendChild(a);
    topicList.appendChild(li);
  });
}
