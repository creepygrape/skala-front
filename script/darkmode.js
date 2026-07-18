document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const modeIcon = toggleBtn.querySelector(".mode-icon");

  toggleBtn.addEventListener("click", () => {
    // 1. body에 dark-mode 클래스 토글
    document.body.classList.toggle("dark-mode");

    // 2. 현재 다크모드가 켜졌는지 확인 후 아이콘 변경
    if (document.body.classList.contains("dark-mode")) {
      modeIcon.textContent = "☀️"; // 다크모드일 땐 해 아이콘으로
    } else {
      modeIcon.textContent = "🌙"; // 라이트모드일 땐 달 아이콘으로
    }
  });
});
