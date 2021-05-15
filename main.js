// 메뉴 아이템 클릭시 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navBar.classList.remove("open");
  scrollIntoView(link);
});

// navbar toggle btn
const navBar = document.querySelector("#navbar");
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

//home contact버튼 클릭시 contact로 이동
const contactBtn = document.querySelector(".home__btn--contact");
contactBtn.addEventListener("click", () => {
  const scrollTo = document.querySelector("#contact");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Arrow up

const home = document.querySelector(".home__container");
//.getBoundingClientRect() 위치 알아내기
const homeHight = home.getBoundingClientRect().height;
const arrowBtn = document.querySelector(".arrow-up");
console.log(homeHight);
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHight / 2) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});

// Arrow btn Click Event

arrowBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

//==========slide==============

let skillset = document.querySelector(".skillset"),
  icons = document.querySelectorAll(".skillset li "),
  currentIndex = 0,
  slideCount = icons.length,
  slideMargin = 20,
  slideWidth = 200,
  slideL = document.querySelector(".skills__slide-slideL"),
  slideR = document.querySelector(".skills__slide-slideR");

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    // a.cloneNode(), 자식요소까지 모두 복사-> a.cloneNode(true)
    let cloneSlide = icons[i].cloneNode(true);
    // clone 이라는 클래스 추가
    cloneSlide.classList.add("clone");
    // 뒤에 추가 a.appendChild(b)
    skillset.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = icons[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    // a.prepend(b)
    skillset.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function () {
    skillset.classList.add("animated");
  }, 100);
}

function updateWidth() {
  let currentSlides = document.querySelectorAll(".skillset li");
  let newSlideCount = currentSlides.length;
  // 새로운 길이는 (200+20)*15-마지막 마진 20
  let newWidth =
    (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
  //ul너비 지정
  skillset.style.width = newWidth;
}

// 5/5/5 중에서 가운데 5을 보이게 해야함 왜? 이전버튼 클릭시 오류 안생기게
function setInitialPos() {
  let initialTranslateVale = -(slideWidth + slideMargin) * slideCount;
  // skillset{transform: transateX(-1000px);}
  skillset.style.transform = "translateX(" + initialTranslateVale + "px)";
  //skillset.style.transform = translateX(`${initialTranslateVale}px`);
}

slideR.addEventListener("click", function () {
  moveSlide(currentIndex + 1);
});

slideL.addEventListener("click", function () {
  moveSlide(currentIndex - 1);
});

// clearInteeerval(timer);
let timer = undefined;

function autoSlide() {
  if (timer == undefined) {
    timer = setInterval(function () {
      moveSlide(currentIndex + 1);
    }, 3000);
  }
}
autoSlide();
function stopSlide() {
  clearInterval(timer);
  timer = undefined;
  console.log(timer);
}
skillset.addEventListener("mouseenter", function () {
  stopSlide();
});
skillset.addEventListener("mouseleave", function () {
  autoSlide();
});

function moveSlide(num) {
  skillset.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIndex = num;
  if (currentIndex == slideCount || currentIndex == -slideCount) {
    setTimeout(function () {
      skillset.classList.remove("animated");
      skillset.style.left = "0px";
      currentIndex = 0;
    }, 500);
    setTimeout(function () {
      skillset.classList.add("animated");
    }, 600);
  }
}

// scroll smooth
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// google map api

function initMap() {
  const myLatLng = {
    lat: 35.16034818064948,
    lng: 129.1127823664463,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 18,
  });
  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "my town",
  });
}
