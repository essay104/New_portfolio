const table = document.querySelector(".league-table");

const getTableData = () => {
  fetch(`./PL_data.json`)
    .then((response) => response.json())
    .then((data) => {
      createTable(data);
    });
};

const createTable = (data) => {
  data.forEach((team, idx) => {
    const ul = document.createElement(`ul`);
    ul.className = `team-info`;

    ul.innerHTML = `
    <li>${idx + 1}</li>
    <li>${team.team}</li>
    <li>${team.wins}</li>
    <li>${team.draws}</li>
    <li>${team.losses}</li>
    <li>${team.goals_for}</li>
    <li>${team.goals_against}</li>
    <li>${team.goal_difference}</li>
    <li>${team.points}</li>
    <li></li>
    `;

    table.appendChild(ul);
  });
};

document.addEventListener("DOMContentLoaded", getTableData);

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.sliders');
  const sliders = [
      {
          "name": "Aaron Ramsdale",
          "number": "01",
          "src": "./imgs/01.jpg"
      },
      {
          "name": "David Raya",
          "number": "22",
          "src": "./imgs/22.jpg"
      },
      {
          "name": "William Saliba",
          "number": "02",
          "src": "./imgs/02.jpg"
      }
      // 더 많은 이미지를 추가할 수 있습니다.
  ];

  // JSON 데이터를 사용해 슬라이더에 이미지 추가
  sliders.forEach(player => {
      const li = document.createElement('li');
      li.className = 'slider';

      const img = document.createElement('img');
      img.src = player.src;
      img.alt = player.name;

      li.appendChild(img);
      sliderContainer.appendChild(li);
  });

  const totalSliders = sliders.length;
  let currentIndex = 0;

  const moveSlider = (index) => {
      sliderContainer.style.transform = `translateX(-${index * 100}%)`;
  };

  document.querySelector('.to-right').addEventListener('click', () => {
      if (currentIndex < totalSliders - 1) {
          currentIndex++;
      } else {
          currentIndex = 0; // 마지막 이미지에서 첫 번째 이미지로 돌아갑니다
      }
      moveSlider(currentIndex);
  });

  document.querySelector('.to-left').addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = totalSliders - 1; // 첫 번째 이미지에서 마지막 이미지로 돌아갑니다
      }
      moveSlider(currentIndex);
  });
});
