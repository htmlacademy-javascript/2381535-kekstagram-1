const renderComments = (pictures) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';

  for (let i = 0; i < pictures.comments.length; i++) {
    const createLi = document.createElement('li');
    createLi.classList.add('social__comment');
    commentsList.appendChild(createLi);
    createLi.insertAdjacentHTML('beforeend',
      `<img
        class="social__picture"
        src="${pictures.comments[i].avatar}"
        alt="${pictures.comments[i].name}"
        width="35" height="35">
      <p class="social__text">${pictures.comments[i].message}</p>`);
  }
};

export { renderComments };
