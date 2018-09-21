const preBg = document.querySelector('body > article.before > div:nth-child(1)');
const preText = document.querySelector('body > article.before > div:nth-child(2)');

const beforeContent = document.querySelector("article.before");
const mainContent = document.querySelector("article.main");

const asideIcon = document.querySelector("body > .main > div.aside-menu > aside > i");
const asideMenu = document.querySelector("body > .main > div.aside-menu > nav");
const container = document.querySelector(".container");
const asideMenuName = document.querySelector("body > .main > div.aside-menu > aside > span");
const menuList = document.querySelectorAll("body > article.main > div.aside-menu > nav > ul > li");

var toggleFlag = 0;

preBg.addEventListener("animationend", FinishPreRender);

asideIcon.addEventListener("click", ToggleMenu);
asideMenu.addEventListener("transitionend", MenuListToggle);

function FinishPreRender() {
  beforeContent.style.transform = "translateX(100%)";
  mainContent.style.transform = "translate(0, -100%)";
}

function ToggleMenu() {
  asideMenu.style.left = (toggleFlag)?"calc(-100% / 12 * 5)": 0;
  container.style.left = (toggleFlag)?0:"calc(100% / 12 * 5)";
  asideMenuName.style.display = (toggleFlag)?"block":"none";
  if(toggleFlag) {
    asideIcon.classList.remove("fa-close");
    asideIcon.classList.add("fa-bars");
  } else {
    asideIcon.classList.remove("fa-bars");
    asideIcon.classList.add("fa-close");
  }
  toggleFlag ^= 1;
}

function MenuListToggle() {
  for(let i = 0; i < menuList.length; i++) {
    setTimeout((menuList, i) => {
      menuList[i].style.opacity = toggleFlag;
    }, i*100, menuList, i);
  }
}