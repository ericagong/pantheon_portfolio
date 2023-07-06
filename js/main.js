// search bar logic
const headerEl = document.querySelector("header");
const searchWrapperEl = document.querySelector(".search-wrapper");
const searchStarterEl = document.querySelector(".search-starter");
const searchCloserEl = document.querySelector(".search-closer");
const searchShadowEl = document.querySelector(".shadow");

function showSearchBar() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("no-scroll");
}

function hideSearchBar() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("no-scroll");
}

// searching 클래스 선택자 토글처리
searchStarterEl.addEventListener("click", () => {
  if (headerEl.classList.contains("searching")) {
    hideSearchBar();
  } else {
    showSearchBar();
  }
});

// 닫기 버튼 클릭 시, 검색바 닫기
searchCloserEl.addEventListener("click", hideSearchBar);

// 검색바 외부 클릭 시, 검색바 닫기
searchShadowEl.addEventListener("click", hideSearchBar);

// contact modal logic
const contactStarterEl = document.querySelector(".contact-starter");
const contactModalEl = document.querySelector(".contact-modal");

function showModal() {
  contactModalEl.classList.add("show");
}

function hideModal() {
  contactModalEl.classList.remove("show");
}

// show 클래스 선택자 토글처리
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

window.addEventListener("click", hideModal);
