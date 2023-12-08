import './assets/style/main.scss';
import './burger';
import './inputHandler';

const failedToLoadDescriptionMessage =
  'Something went wrong... Description is currently unavailable 😓';

async function getDescription(numberOfSentences) {
  const response = await fetch(
    `https://baconipsum.com/api/?type=lucky?sentences=${numberOfSentences}`
  );
  const data = await response.json();
  return data[0];
}

function showSkeletonLoader(element) {
  element.classList.add('skeleton-loader');
}

function removeSkeletonLoader(element) {
  element.classList.remove('skeleton-loader');
}

async function displayDescription() {
  const descriptionDivElement = document.querySelector('.module__description');

  showSkeletonLoader(descriptionDivElement);

  try {
    const descriptionText = await getDescription(3);
    descriptionDivElement.textContent = descriptionText;
    removeSkeletonLoader(descriptionDivElement);
  } catch (error) {
    console.error('Error fetching data:', error);
    descriptionDivElement.textContent = failedToLoadDescriptionMessage;
    removeSkeletonLoader(descriptionDivElement);
  }
}

displayDescription();
