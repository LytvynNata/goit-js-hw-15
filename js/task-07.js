const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const changeFontSize = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};

changeFontSize();

inputEl.addEventListener('input', changeFontSize);