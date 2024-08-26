const cards = document.querySelectorAll(".cards");
const hideCards = document.querySelectorAll(".hide-cards");

const seoulImgs = ["seoul01.jpg", "seoul02.jpg", "seoul03.jpg", "seooul04.jpg"];
const busanImgs = ["busan01.jpg", "busan02.jpg", "busan03.jpg", "busan04.jpg"];
const incheonImgs = [
  "incheon01.jpg",
  "inchoena02.jpg",
  "inchoen03.jpg",
  "inchoen04.jpg",
];
const gwangjuImgs = [
  "gwangju01.jpg",
  "gwangju02.jpg",
  "gwangju03.jpg",
  "gwangju04.jpg",
];
const daeguImgs = ["daegu01.jpg", "daegu02.jpg", "daegu03.jpg", "daegu04.jpg"];
const daejeonImgs = [
  "daejeon01.jpg",
  "daejeon02.jpg",
  "daejeon03.jpg",
  "daejeon04.jpg",
];

const imgInit = {
  seoul: 0,
  busan: 0,
  incheon: 0,
  gwangju: 0,
  daegu: 0,
  daejeon: 0,
};

const city = {
  seoul: seoulImgs,
  busan: busanImgs,
  incheon: incheonImgs,
  gwangju: gwangjuImgs,
  daegu: daeguImgs,
  daejeon: daejeonImgs,
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardClass = card.classList[1];
    const imgArray = city[cardClass];
    const imgIndex = imgInit[cardClass];

    const cardImg = document.querySelector
  });

  card.addEventListener("click", () => {
    cards.forEach((c) => {
      if (c !== card) {
        c.classList.remove("active");
      }
    });
    card.classList.toggle("active");

    hideCards.forEach((hide) => {
      hide.classList.toggle("active");
    });
  });
});
