import './assets/style/main.scss';
import './burger';

const descriptionDivElement = document.querySelector('.module__description');

async function getDescription(numberOfSentences) {
  const response = await fetch(
    `https://baconipsum.com/api/?type=lucky?sentences=${numberOfSentences}`
  );
  const data = await response.json();
  return data[0];
}

const description = await getDescription(3);
descriptionDivElement.innerHTML = description;
