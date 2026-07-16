document.addEventListener("DOMContentLoaded", () => {
  // 1. 현재 페이지에 목차 리스트(ul)가 있는지 확인
  const topicList = document.querySelector(".topic-list");
  if (!topicList) return; // 목차 영역이 없는 페이지라면 실행하지 않고 종료!

  // 2. 현재 페이지 본문에서 'topic' 클래스를 가진 요소들을 전부 수집
  const targets = document.querySelectorAll(".topic");

  if (targets.length === 0) {
    return;
  }

  // 3. 기존 목차 비우기
  topicList.innerHTML = "";

  // 4. 수집한 타겟들을 돌며 목차 아이템(li > a) 생성
  targets.forEach((target) => {
    const id = target.id;
    // 💡 HTML에 설정한 data-title 속성값을 가져오고, 없으면 태그의 첫 번째 h2/h3 글씨나 기본값을 씁니다.
    let title = target.getAttribute("data-title");

    if (!title) {
      const heading = target.querySelector("h1, h2, h3, figcaption");
      title = heading ? heading.textContent.trim() : "상세 보기";
    }

    if (!id) {
      console.warn("목차로 연결할 요소에 id 속성이 없습니다:", target);
      return; // id가 없으면 링크를 걸 수 없으므로 패스
    }

    console.log("앵커 : " + id + " | " + title);

    // HTML 태그 생성 및 조립
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${id}`;
    a.textContent = title;

    li.appendChild(a);
    topicList.appendChild(li);
  });
});
