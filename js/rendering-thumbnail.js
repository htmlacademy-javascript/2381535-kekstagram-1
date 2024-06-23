import { getPosts } from './data.js';

// Секция с картинками в HTML
const picturesSection = document.querySelector('.pictures');

// Шаблон #picture
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const valueGetPosts = getPosts();

const valueFinished = valueGetPosts.forEach((user)=>{
  const clonePictureTemplate = pictureTemplate.cloneNode(true);
  clonePictureTemplate.querySelector('.picture__img').src = user.url;
  clonePictureTemplate.querySelector('.picture__likes').textContent = user.likes;
  clonePictureTemplate.querySelector('.picture__comments').textContent = user.comments.length;
  picturesSection.appendChild(clonePictureTemplate);
});

export { valueFinished };
