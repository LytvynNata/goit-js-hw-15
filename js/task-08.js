const formEl = document.querySelector('.login-form');

const handleClick = (event) => {
  event.preventDefault();
  if (
    formEl.elements.email.value === '' ||
    formEl.elements.password.value === ''
  ) {
    alert('Всі поля повинні бути заповнені');
  } else {
    const newObj = new Object();
    newObj.email = `${formEl.elements.email.value}`;
    newObj.password = `${formEl.elements.password.value}`;
    console.log(newObj);
    formEl.reset();
  }
};

formEl.addEventListener('submit', handleClick);
