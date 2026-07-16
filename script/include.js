function includeHTML(selector, filepath) {
  fetch(filepath)
    .then((response) => {
      if (response.ok) return response.text();
      throw new Error("파일을 불러오는데 실패했습니다.");
    })
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("nav", "./components/nav.html");
  includeHTML("footer", "./components/footer.html");
  includeHTML("#aside-right", "./components/asideRight.html");
});
