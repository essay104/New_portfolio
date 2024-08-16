const controllBtn = document.querySelector(".controll-btn");
const autoSliderController = document.querySelector(".auto-slider-controller");
const sliderType = document.querySelectorAll(".slider-type");
const sliderTypeSub = document.querySelector(".slider-type-sub");
const typeBox = document.querySelector(".type-box");
const sliders = document.querySelector(".sliders");
const right = document.querySelector(".to-right");
const left = document.querySelector(".to-left");
const playerName = document.querySelector(".player-name");
const nationality = document.querySelector(".nationality");
const playerPosition = document.querySelector(".player-position");

autoSliderController.addEventListener("click", () => {
  if (controllBtn.classList.contains("active")) {
    controllBtn.textContent = "AUTO";
    controllBtn.classList.remove("active");
    autoSliderController.style.backgroundColor = `#151739`;
  } else {
    controllBtn.textContent = "STOP";
    controllBtn.classList.add("active");
    autoSliderController.style.backgroundColor = `#eee`;
  }
});

sliderTypeSub.textContent = "Version 01";

sliderType.forEach((type, idx) => {
  type.addEventListener("click", () => {
    console.log("type!!");
    sliderType.forEach((it) => {
      it.classList.remove("active");
    });
    type.classList.add("active");
    sliderTypeSub.textContent = type.textContent;
    sliderTypeSub.classList.remove("animate");
    void sliderTypeSub.offsetWidth;
    sliderTypeSub.classList.add("animate");
  });
});

const getSliderData = () => {
  fetch(`./db.json`)
    .then((response) => response.json())
    .then((data) => {
      createSlider(data.players);
      updatePlayerInfo(data.players, 0);
    });
};

const createSlider = (players) => {
  const firstSlider = document.querySelector(".logo");
  const secondSlider = firstSlider.nextElementSibling;
  const currentPage = document.querySelector(".current-page");

  console.log(currentPage);

  players.forEach((player, idx) => {
    const li = document.createElement(`li`);
    li.className = `slider`;

    const img = document.createElement(`img`);
    img.src = player.src;
    img.alt = player.name;

    li.appendChild(img);
    firstSlider.parentNode.insertBefore(li, secondSlider);
  });

  const totalSliders = players.length;
  const sliderWidth = document.querySelector(".slider").scrollWidth;

  let currentIndex = 0;

  const moveSlider = (index) => {
    sliders.style.transform = `translateX(-${sliderWidth * index}px)`;
    updatePlayerInfo(players, index);
  };

  right.addEventListener("click", () => {
    if (currentIndex < totalSliders - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveSlider(currentIndex);
    currentPage.textContent = currentIndex + 1;
  });

  left.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSliders - 1;
    }
    moveSlider(currentIndex);
    currentPage.textContent = currentIndex + 1;
  });
};

const updatePlayerInfo = (players, index) => {
  const player = players[index];
  playerName.textContent = `${player.number} ${player.name}`;
  nationality.src = player.flag;
  playerPosition.textContent = player.position;
};

getSliderData();
