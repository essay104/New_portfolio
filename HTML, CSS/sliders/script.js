const controllBtn = document.querySelector(".controll-btn");
const autoSliderController = document.querySelector(".auto-slider-controller");
const sliderType = document.querySelectorAll(".slider-type");
const sliderTypeSub = document.querySelector(".slider-type-sub");
const typeBox = document.querySelector(".type-box");

console.log(sliderType);

controllBtn.addEventListener("click", () => {
  console.log("click!");
  if (controllBtn.classList.contains("active")) {
    controllBtn.textContent = "AUTO";
    controllBtn.classList.remove("active");
    autoSliderController.style.backgroundColor = "royalblue";
  } else {
    controllBtn.textContent = "STOP";
    controllBtn.classList.add("active");
    autoSliderController.style.backgroundColor = "crimson";
  }
});

sliderType.forEach((type, idx) => {
  type.addEventListener("click", () => {
    console.log("type!!");
    console.log(type.textContent);
    sliderTypeSub.textContent = type.textContent;

    sliderTypeSub.classList.remove("animate");
    void sliderTypeSub.offsetWidth; // 리플로우 강제
    sliderTypeSub.classList.add("animate");
  });
});
