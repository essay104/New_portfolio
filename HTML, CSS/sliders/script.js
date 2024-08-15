const controllBtn = document.querySelector(".controll-btn");
const autoSliderController = document.querySelector(".auto-slider-controller");

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
