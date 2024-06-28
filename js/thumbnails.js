const picturesSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const valueFinished = (values) => {
  values.forEach((user)=>{
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.querySelector('.picture__img').src = user.url;
    clonePictureTemplate.querySelector('.picture__likes').textContent = user.likes;
    clonePictureTemplate.querySelector('.picture__comments').textContent = user.comments.length;
    picturesSection.appendChild(clonePictureTemplate);
  });
}

export { valueFinished };
