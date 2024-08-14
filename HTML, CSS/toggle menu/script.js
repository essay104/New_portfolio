const tabBtns = document.querySelectorAll(".tabs a");

tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    tabBtns.forEach((otherBtns) => {
      otherBtns.classList.remove("active");
    });
    tabBtn.classList.add("active");
  });
});

const Imgs = ["img01.jpg", "img02.jpg", "img03.jpg"];
const londonImg = document.querySelector(".london-img img");
const parisImg = document.querySelector(".paris-img img");
const newyorkImg = document.querySelector(".newyork-img img");
const dubaiImg = document.querySelector(".dubai-img img");
const sliderBtns = document.querySelectorAll(".slider-btn");
const sliderBtns2 = document.querySelectorAll(".tab2-btn");
const sliderBtns3 = document.querySelectorAll(".tab3-btn");
const sliderBtns4 = document.querySelectorAll(".tab4-btn");

// londonImg.src = `/imgs/london/img01.jpg`;

i = 0;

const reset = () => {
  sliderBtns.forEach((btn) => btn.classList.remove("active"));
  // sliderBtns2.forEach((btn) => btn.classList.remove("active"));
  // sliderBtns3.forEach((btn) => btn.classList.remove("active"));
  // sliderBtns4.forEach((btn) => btn.classList.remove("active"));
};

const sliderChangeEvent = () => {
  i++;
  if (i >= Imgs.length) {
    i = 0;
  }
  reset();
  sliderBtns[i].classList.add("active");
  sliderBtns2[i].classList.add("active");
  sliderBtns3[i].classList.add("active");
  sliderBtns4[i].classList.add("active");
  londonImg.src = `/imgs/london/${Imgs[i]}`;
  parisImg.src = `./imgs/paris/${Imgs[i]}`;
  newyorkImg.src = `./imgs/newyork/${Imgs[i]}`;
  dubaiImg.src = `./imgs/dubai/${Imgs[i]}`;
};

const autoSlider = () => {
  auto = setInterval(() => {
    sliderChangeEvent();
  }, 1000);
};

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    reset();
    londonImg.src = `/imgs/london/img01.jpg`;
    parisImg.src = `/imgs/paris/img01.jpg`;
    newyorkImg.src = `./imgs/newyork/img01.jpg`;
    dubaiImg.src = `./imgs/dubai/img01.jpg`;
  });
});

autoSlider();
