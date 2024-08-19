const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_DEFAULT_VALUE = 100;
const SCALE_STEP = 25;

const scaleSet = document.querySelector('.img-upload__scale');
const scaleValue = scaleSet.querySelector('.scale__control--value');
const scaleButtonSmaller = scaleSet.querySelector('.scale__control--smaller');
const scaleButtonBigger = scaleSet.querySelector('.scale__control--bigger');
const imageElement = document.querySelector('.img-upload__preview img');

let currentValueScale = SCALE_DEFAULT_VALUE;

const scaleImage = () => {
  imageElement.style.transform = `scale(${currentValueScale / 100})`;
  scaleValue.value = `${currentValueScale}%`;
};

const onScaleSmallerClick = () => {
  currentValueScale -= SCALE_STEP;
  if (currentValueScale <= SCALE_MIN_VALUE) {
    currentValueScale = SCALE_MIN_VALUE;
  }
  scaleImage(currentValueScale);

};
const onScaleBiggerClick = () => {
  currentValueScale += SCALE_STEP;
  if (currentValueScale >= SCALE_MAX_VALUE) {
    currentValueScale = SCALE_MAX_VALUE;
  }
  scaleImage(currentValueScale);
};

const initScale = () => {
  scaleImage(SCALE_DEFAULT_VALUE);
  scaleButtonSmaller.addEventListener('click', onScaleSmallerClick);
  scaleButtonBigger.addEventListener('click', onScaleBiggerClick);
};

function resetScale() {
  currentValueScale = SCALE_DEFAULT_VALUE;
}

export {initScale, resetScale};
