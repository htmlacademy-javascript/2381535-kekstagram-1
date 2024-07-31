const EFFECTS = [
  {
    name: 'original',
    filter: 'none',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },{
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];

const DEFAULT_EFFECT = EFFECTS[0];
const HIDDEN_SLIDER = 'hidden';

const containerSlider = document.querySelector('.effect-level');
const effectLevelElement = containerSlider.querySelector('.effect-level__value')
const effectSlider = containerSlider.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects');
const imgPicture = document.querySelector('.img-upload__preview img');

let pressedEffect = DEFAULT_EFFECT;


const showSlider = () => {
  containerSlider.classList.remove(HIDDEN_SLIDER);
};

const hideSlider = () => {
  containerSlider.classList.add(HIDDEN_SLIDER);
};

// Create slider
window.noUiSlider.create(effectSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

// Slider init
const updateSlider = (pressedEffect) => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: pressedEffect.min,
      max: pressedEffect.max,
    },
    step: pressedEffect.step,
    start: pressedEffect.max,
  });
};

// Search element in slider
const onEffectChange = (evt) => {
  pressedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  if (pressedEffect === undefined) {
    imgPicture.className = '';
    imgPicture.style.filter = '';
    hideSlider();
  } else {
    imgPicture.className = `effects__preview--${pressedEffect.name}`;
    showSlider();
    updateSlider(pressedEffect);
  };
};

// Chanch slider value
const onSliderUpdate = () => {
  const sliderValue = effectSlider.noUiSlider.get();
  imgPicture.style.filter = `${pressedEffect.filter}(${sliderValue}${pressedEffect.unit})`;
  effectLevelElement.value = sliderValue;

  console.log(`${pressedEffect.filter}(${sliderValue}${pressedEffect.unit})`);
};

effectsList.addEventListener('change', onEffectChange);
effectSlider.noUiSlider.on('update', onSliderUpdate);

// Resert effects
const resetEffects = () => {
  imgPicture.className = '';
  imgPicture.style.filter = '';
};

export { resetEffects, hideSlider };
