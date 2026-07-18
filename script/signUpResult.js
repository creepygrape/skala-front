document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userId = urlParams.get("userId");
  const userPassword = urlParams.get("userPassword");
  const userEmail = urlParams.get("userEmail");
  const userName = urlParams.get("userName");
  const userPhone = urlParams.get("userPhone");
  const userBirth = urlParams.get("userBirth");
  const gender = urlParams.get("gender");
  const userCountry = urlParams.get("userCountry");
  const userMessage = urlParams.get("userMessage");
  const agreement = urlParams.get("agreement");

  const interests = urlParams.getAll("interest");

  const renderText = (selector, value, defaultValue = "미입력") => {
    const target = document.querySelector(selector);
    if (target) {
      target.textContent = value && value.trim() !== "" ? value : defaultValue;
    }
  };

  renderText("#userId", userId);
  renderText("#userPassword", userPassword);
  renderText("#userEmail", userEmail);
  renderText("#userName", userName);
  renderText("#userPhone", userPhone);
  renderText("#userBirth", userBirth);

  const genderMap = { male: "남성", female: "여성", none: "선택안함" };
  renderText("#gender", genderMap[gender] || gender);

  const countryMap = {
    korea: "한국",
    usa: "미국",
    japan: "일본",
    china: "중국",
  };
  renderText("#userCountry", countryMap[userCountry] || userCountry);

  renderText("#userMessage", userMessage);
  renderText("#agreement", agreement === "agree" ? "동의함" : "비동의함");

  const interestMap = {
    html: "HTML",
    css: "CSS",
    frontend: "프론트엔드",
    backend: "백엔드",
    design: "디자인",
  };

  const interestCell = document.querySelector("#interest");
  if (interestCell) {
    if (interests.length > 0) {
      const mappedInterests = interests.map(
        (item) => interestMap[item] || item
      );
      interestCell.textContent = mappedInterests.join(", ");
    } else {
      interestCell.textContent = "선택 없음";
    }
  }
});
