import { openBigPicture } from './big-picture.js';

const picturesSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
let data = [];

const onPicturesSectionClick = (evt) => {
  evt.preventDefault();
  const picture = evt.target.closest('.picture');

  if (picture) {
    const pictureId = picture.dataset.id;
    const pictureData = data.find((item) => item.id === +pictureId);
    openBigPicture(pictureData);
  }
};

const createThumbnails = (posts) => {
  posts.forEach((post) => {
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.querySelector('.picture__img').src = post.url;
    clonePictureTemplate.querySelector('.picture__likes').textContent = post.likes;
    clonePictureTemplate.querySelector('.picture__comments').textContent = post.comments.length;
    clonePictureTemplate.dataset.id = post.id;
    picturesSection.appendChild(clonePictureTemplate);
  });
};

const initThumbnails = (posts) => {
  data = posts.slice();
  createThumbnails(data);
  picturesSection.addEventListener('click', onPicturesSectionClick);
};

export { initThumbnails };
