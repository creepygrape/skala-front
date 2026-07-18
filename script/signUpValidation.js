// ../script/validation.js

// 1. 문서 전체(document)에서 발생하는 submit 이벤트를 미리 감시합니다.
document.addEventListener("submit", (event) => {
  const form = event.target;

  const agree = form.querySelector('input[name="agreement"][value="agree"]');
  const disagree = form.querySelector(
    'input[name="agreement"][value="disagree"]'
  );

  if (agree && disagree) {
    if (disagree.checked) {
      agree.setCustomValidity("이용약관에 동의해야 회원가입이 가능합니다.");

      form.reportValidity();
      event.preventDefault();
    } else {
      agree.setCustomValidity("");
    }
  }
});

document.addEventListener("change", (event) => {
  if (event.target.name === "agreement") {
    const agree = document.querySelector(
      'input[name="agreement"][value="agree"]'
    );
    if (agree && agree.checked) {
      agree.setCustomValidity("");
    }
  }
});
