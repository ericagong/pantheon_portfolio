const contactStarterEl = document.querySelector("header .contact-starter");
const contactModalEl = document.querySelector(".contact-modal");

function showModal() {
  contactModalEl.classList.add("show");
}

function hideModal() {
  contactModalEl.classList.remove("show");
}

// show 클래스 선택자를 토글처리
contactStarterEl.addEventListener("click", (event) => {
  // contact-starter 클릭 시 이벤트 버블링을 막아줌
  event.stopPropagation();
  if (contactModalEl.classList.contains("show")) {
    hideModal();
  } else {
    showModal();
  }
});

// 드롭다운 내 메뉴 클릭시 드롭다운 사라지지 않도록 이벤트 버블링 막기
contactModalEl.addEventListener("click", (event) => {
  event.stopPropagation();
});

window.addEventListener("click", () => {
  hideModal();
});
