const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');

form.addEventListener('submit', (e) => e.preventDefault());

input.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  const restrictedCharacters = /[!@#$%^&*()]/;
  const inputHasRestrictedChars = restrictedCharacters.test(inputValue);

  if (inputHasRestrictedChars) {
    e.target.value = inputValue.replace(restrictedCharacters, '');
  }
});
