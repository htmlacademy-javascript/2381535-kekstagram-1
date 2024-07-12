import { isEscapeKey } from './utils.js';
import { renderComments } from './comments.js';

const HIDDEN_PICTURE_CLASS = 'hidden';
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPicture.classList.add(HIDDEN_PICTURE_CLASS);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
}

const changeTemplate = (picture) => {
  const img = bigPicture.querySelector('img');
  const likes = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const description = bigPicture.querySelector('.social__caption');

  img.src = picture.url;
  likes.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  description.textContent = picture.description;
};

const openBigPicture = (picture) => {
  bigPicture.classList.remove(HIDDEN_PICTURE_CLASS);
  changeTemplate(picture);
  renderComments(picture);
  bigPictureCancel.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onDocumentKeydown);

  document.querySelector('.social__comment-count').classList.add(HIDDEN_PICTURE_CLASS);
  document.querySelector('.comments-loader').classList.add(HIDDEN_PICTURE_CLASS);
  document.body.classList.add('modal-open');
};

export { openBigPicture };
