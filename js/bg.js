const images = [
  "randomBg_1.jpg",
  "randomBg_2.jpg",
  "randomBg_3.jpg",
  "randomBg_4.jpg",
  "randomBg_5.jpg",
];
const changeBtn = document.querySelector(".change-btn");
const body = document.querySelector("body");
const backgroundImg = document.querySelector("#backgroundImg");

function changeBg() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  backgroundImg.style.width = "100vw";
  backgroundImg.style.height = "100vh";
  backgroundImg.style.background = `url(./img/${chosenImage}) no-repeat center / cover`;
}

changeBg();
changeBtn.addEventListener("click", changeBg);
