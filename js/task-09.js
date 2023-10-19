function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;

  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = color;
});