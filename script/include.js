function includeHTML(selector, filepath) {
  return fetch(filepath)
    .then((response) => {
      if (response.ok) return response.text();
      throw new Error("파일을 불러오는데 실패했습니다.");
    })
    .then((data) => {
      const targetElement = document.querySelector(selector);
      if (targetElement) {
        targetElement.innerHTML = data;
      }
    })
    .catch((error) => console.error(error));
}

window.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    includeHTML("header", "./components/header.html"),
    includeHTML("footer", "./components/footer.html"),
    includeHTML("#aside-left", "./components/asideLeft.html"),
    includeHTML("#aside-right", "./components/asideRight.html"),
  ]);

  loadAsideRight();
  loadAsideLeft();
  initDarkMode();
});

async function loadAsideLeft() {
  try {
    const { renderTopicList } = await import("./topicList.js");
    renderTopicList();
  } catch (err) {
    console.error("목차 모듈 로드 실패:", err);
  }
}

function loadAsideRight() {
  if (!document.querySelector('script[src*="realTimeInfo.js"]')) {
    const script = document.createElement("script");
    script.src = "../script/realTimeInfo.js";
    script.type = "module";
    document.body.appendChild(script);
  }
}

function initDarkMode() {
  const toggleBtn = document.getElementById("dark-mode-toggle");

  if (!toggleBtn) return;

  const modeIcon = toggleBtn.querySelector(".mode-icon");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (modeIcon) modeIcon.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    if (modeIcon) modeIcon.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      if (modeIcon) modeIcon.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      if (modeIcon) modeIcon.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
}
