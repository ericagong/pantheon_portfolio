// search bar logic
const headerEl = document.querySelector("header");
// NodeList를 배열 형태로 바꾸기 위해 ... 사용(얕은 복사)
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapperEl = headerEl.querySelector(".search-wrapper");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapperEl.querySelector(".search-closer");
const searchShadowEl = searchWrapperEl.querySelector(".shadow");
const searchRecommendEls = [
  ...searchWrapperEl.querySelectorAll(".recommend li"),
];

function showSearchBar() {
  headerEl.classList.add("searching");
  // 스크롤 불가능
  document.documentElement.classList.add("no-scroll");
  // Array.prototype.reverse는 원본 배열 변화
  // 오른쪽 요소부터 애니메이션으로 안보이게 처리 (총 0.4초 소요)
  headerMenuEls.reverse().forEach((el, i) => {
    el.style.transitionDelay = `${(0.4 / headerMenuEls.length) * i}s`;
  });
  // 맨 위 요소부터 애니메이션으로 보이게 처리
  searchRecommendEls.forEach((el, i) => {
    el.style.transitionDelay = `${
      0.2 + (0.4 / searchRecommendEls.length) * i
    }s`;
  });
}

function hideSearchBar() {
  headerEl.classList.remove("searching");
  // 스크롤 가능
  document.documentElement.classList.remove("no-scroll");
  // 왼쪽 요소부터 애니메이션으로 보이게 처리 (총 0.4초 소요)
  headerMenuEls.reverse().forEach((el, i) => {
    el.style.transitionDelay = `${(0.4 / headerMenuEls.length) * i}s`;
  });
  // 맨 아래 요소부터 애니메이션으로 안보이게 처리
  searchRecommendEls.reverse().forEach((el, i) => {
    el.style.transitionDelay = `${
      0.2 + (0.4 / searchRecommendEls.length) * i
    }s`;
  });
  // 원본 배열 유지
  searchRecommendEls.reverse();
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
