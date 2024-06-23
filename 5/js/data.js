import { getRandomInteger, createRandomId } from './util.js';

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

const DESCRIPTIONS_PHOTOS = [
  'Перед нами интересная фотография.',
  'Это изображение точно передаёт хорошее настроение.',
  'Давайте рассмотрим изображение внимательнее.',
];

const CountPhoto = {
  MIN: 1,
  MAX: 25,
};

const CountLike = {
  MIN: 25,
  MAX: 200,
};

const CountAvatar = {
  MIN: 1,
  MAX: 6,
};

const CountComment = {
  MIN: 1,
  MAX: 3,
};

const MAX_POST_COUNT = 25;

const getId = createRandomId(CountPhoto.MIN, CountPhoto.MAX);
const getUrl = createRandomId(CountPhoto.MIN, CountPhoto.MAX);
const getIdForComment = createRandomId(1, 1000);

const getComment = () => ({
  id: getIdForComment(),
  avatar: `img/avatar-${getRandomInteger(CountAvatar.MIN, CountAvatar.MAX)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES_AUTHORS[getRandomInteger(0, NAMES_AUTHORS.length - 1)],
});

const createPost = () => ({
  id: getId(),
  url: `photos/${getUrl()}.jpg`,
  description: DESCRIPTIONS_PHOTOS[getRandomInteger(0, DESCRIPTIONS_PHOTOS.length - 1)],
  likes: getRandomInteger(CountLike.MIN, CountLike.MAX),
  comments: Array.from({length: getRandomInteger(CountComment.MIN, CountComment.MAX)}, getComment),
});

const getPosts = () => Array.from({length: MAX_POST_COUNT}, createPost);

export { getPosts };
