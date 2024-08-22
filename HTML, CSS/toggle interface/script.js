const header = document.querySelector("header");
const menu = document.querySelectorAll(".menu");
const headerTop = document.querySelector(".header-top");
const dropDown = document.querySelector(".header-bottom");
const buttons = document.querySelectorAll(".buttons");
const tabItems = document.querySelector(".items");
const h1 = tabItems.querySelectorAll("h1");

const state = {
  color: "#ffd700",
};

menu.forEach((it) => {
  it.addEventListener("mouseover", () => {
    header.classList.add("active");
  });
});

header.addEventListener("mouseleave", () => {
  header.classList.remove("active");
});

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    tabItems.style.left = `-${idx * 100}%`;

    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");

    h1.forEach((title) => title.classList.remove("active"));
    h1[idx].classList.add("active");

    const selectedColor = button.getAttribute("interface-color");

    state.color = selectedColor;
    console.log(state.color);

    headerTop.style.borderBottom = `5px solid ${state.color}`;
    menu.forEach((menuItem) => (menuItem.style.color = state.color));
    dropDown.style.backgroundColor = state.color;
  });
});
