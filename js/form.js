import { isEscapeKey } from './utils.js';

const HIDDEN_UPLOAD_CLASS = 'hidden';
const MODAL_OPEN_CLASS = 'modal-open';
const TAG_ERROR_TEXT = 'Некорректное имя ХешТега';
const VALID_HASHTAG_REGULAR = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;

const form = document.querySelector('.img-upload__form');
const imgUploadModule = form.querySelector('.img-upload__overlay');
const imgUploadButton = form.querySelector('.img-upload__input');
const imgUploadClose = form.querySelector('.img-upload__cancel');
const commentField = form.querySelector('.text__description');
const hashtagField = form.querySelector('.text__hashtags');
const btnSubmitModule = form.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isValidTag = (tag) => VALID_HASHTAG_REGULAR.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const normalizeTags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);

  const isValidAllTags = normalizeTags.every(isValidTag) && hasValidCount(normalizeTags) && hasUniqueTags(normalizeTags);

  if (!Boolean(isValidAllTags)) {
    btnSubmitModule.setAttribute('disabled', '');
  } else btnSubmitModule.removeAttribute('disabled', '');

  return isValidAllTags;
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
)

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onCloseModalClick = () => closeModal();
function closeModal() {
  imgUploadModule.classList.add(HIDDEN_UPLOAD_CLASS);
  document.body.classList.remove(MODAL_OPEN_CLASS);
  document.removeEventListener('keydown', onDocumentKeydown);
  commentField.removeEventListener('keydown', onStopPropagationKeydown);
  hashtagField.removeEventListener('keydown', onStopPropagationKeydown);
  form.reset();
};

const onStopPropagationKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  };
};


const onShowModalClick = () => showModal();
const showModal = () => {
  imgUploadModule.classList.remove(HIDDEN_UPLOAD_CLASS);
  document.body.classList.add(MODAL_OPEN_CLASS);
  document.addEventListener('keydown', onDocumentKeydown);
  imgUploadClose.addEventListener('click', onCloseModalClick);
  commentField.addEventListener('keydown', onStopPropagationKeydown);
  hashtagField.addEventListener('keydown', onStopPropagationKeydown);
};

const initForm = () => {
  imgUploadButton.addEventListener('change', onShowModalClick);
  pristine.validate();
};

export {initForm};
