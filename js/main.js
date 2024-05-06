const MIN_NUMBER_OF_PHOTOS = 1;
const MAX_NUMBER_OF_PHOTOS = 25;

const NAMES_AUTHORS = [
  'Регина',
  'Вадим',
  'Андрей',
  'Артур',
  'Ева',
  'Александр',
  'Алина',
  'Катя',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Радомное число из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// Функция замыкания, с не повторяющимися рандомными числами
function createRandomId(min, max) {
  let previousValues = [];
  return function() {
    let currentValue = getRandomInteger(min,max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while(previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min,max);
    };
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getId = createRandomId(MIN_NUMBER_OF_PHOTOS, MAX_NUMBER_OF_PHOTOS);
const getUrl = createRandomId(MIN_NUMBER_OF_PHOTOS, MAX_NUMBER_OF_PHOTOS);
const getIdForComment = createRandomId(1, 1000);

// Переменная для сохраниния сгенерированных ID
// const generatePhotoId = () => createRandomId(MIN_NUMBER_OF_PHOTOS, MAX_NUMBER_OF_PHOTOS);

// Создание комментария
const createComments = () => {
  return [{
    'id': getIdForComment(),
    'avatar': 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    'message': MESSAGES[getRandomInteger(0, MESSAGES.length-1)],
    'name': NAMES_AUTHORS[getRandomInteger(0, NAMES_AUTHORS.length-1)],
  }]
};

let postsArray = [];

// Создание публикацции
const createPost = () => {
  return postsArray.push({
    'id': getId(),
    'url': 'photos/' + getUrl() + '.jpg',
    'description': 'Перед нами интересная фотография. Она точно передаёт хорошее настроение. Давайте рассмотрим изображение внимательнее.',
    'likes': getRandomInteger(15, 200),
    'comments': createComments(),
  });
};
