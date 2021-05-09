// 메뉴 아이템 클릭시 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//home contact버튼 클릭시 contact로 이동
const contactBtn = document.querySelector(".home__btn--contact");
contactBtn.addEventListener("click", () => {
  const scrollTo = document.querySelector("#contact");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// const home = document.querySelector(".main__wrap");
// const homeheight = home.getBoundingClientRect().height;
// document.addEventListener("scroll", () => {
//   if (Window.scrollY / homeheight) {
//     home.style.opacity = 0.1;
//   } else {
//     home.style.opacity = 1;
//   }
//   //     if( homeheight)
//   //   home.style.opacity = 1 - window.scrollY / homeheight;
//   console.log("homeheight:" + homeheight);
//   console.log("window.scrollY:" + window.scrollY);
// });

// ===============================================
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
