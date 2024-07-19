import { isEscapeKey } from './utils.js';

const HIDDEN_PICTURE_CLASS = 'hidden';
const MODAL_OPEN_CLASS = 'modal-open';
const STEP_COMMENT = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const commentsList = bigPicture.querySelector('.social__comments');
const img = bigPicture.querySelector('img');
const likes = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');
const quantityComment = bigPicture.querySelector('.comments-count__value');
const commentsCount = bigPicture.querySelector('.comments-count');
const showMore = bigPicture.querySelector('.social__comments-loader');

let commentCounter = STEP_COMMENT;
let comments = [];

const getCommentTemplate = ({ avatar, name, message }) => `<li class="social__comment">
  <img class="social__picture"
    src="${avatar}"
    alt="${name}"
    width="35" height="35">
  <p class="social__text">${message}</p></li>`;

const changeTemplate = (picture) => {
  img.src = picture.url;
  likes.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  description.textContent = picture.description;
};

const renderComments = () => {
  quantityComment.textContent = Math.min(comments.length, commentCounter);
  commentsCount.textContent = comments.length;
  const commentsTemplate = comments.slice(0, commentCounter).map((comment) => getCommentTemplate(comment)).join('');
  commentsList.innerHTML = '';
  commentsList.insertAdjacentHTML('beforeend', commentsTemplate);
  showMore.addEventListener('click', onShowMoreClick);

  if(commentCounter >= comments.length) {
    showMore.classList.add('hidden');
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const onBigPictureCloseClick = () => closeBigPicture();

function onShowMoreClick(evt) {
  evt.preventDefault();

  commentCounter += STEP_COMMENT;
  renderComments();
}

function closeBigPicture() {
  bigPicture.classList.add(HIDDEN_PICTURE_CLASS);
  document.body.classList.remove(MODAL_OPEN_CLASS);
  document.removeEventListener('keydown', onDocumentKeydown);
  showMore.removeEventListener('click', onShowMoreClick);
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  showMore.classList.remove('hidden');
  commentCounter = STEP_COMMENT;
}

const openBigPicture = (picture) => {
  comments = picture.comments.slice();
  bigPicture.classList.remove(HIDDEN_PICTURE_CLASS);
  document.body.classList.add(MODAL_OPEN_CLASS);

  changeTemplate(picture);
  renderComments();

  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
};

export { openBigPicture };
