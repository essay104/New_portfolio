const header = document.querySelector("header");
const headerTop = document.querySelector(".header-top");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const headerBottom = document.querySelector(".header-bottom");

console.log(nav);

let headerTopTimeout;

nav.addEventListener("mouseover", () => {
  if (headerTopTimeout) {
    clearTimeout(headerTopTimeout);
  }

  headerTopTimeout = setTimeout(() => {
    headerTop.classList.add("active");
  }, 100);
  headerBottom.classList.add("active");
});

header.addEventListener("mouseleave", () => {
  if (headerTopTimeout) {
    clearTimeout(headerTopTimeout);
    headerTopTimeout = null;
  }

  headerTop.classList.remove("active");
  headerBottom.classList.remove("active");
});
