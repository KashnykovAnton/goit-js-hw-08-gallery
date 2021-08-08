const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryRef = document.querySelector('.js-gallery');
const lightboxContainer = document.querySelector('.lightbox');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightboxImg = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');

const createItemEl = (acc, { preview, original, description }) => acc + `<li class = 'gallery__item'><a class = 'gallery__link' href = ${original}><img class = 'gallery__image' src = ${preview} data-source = ${original} alt = ${description}/></a></li>`;
const createItemsList = galleryItems.reduce(createItemEl, '');
galleryRef.insertAdjacentHTML('beforeend', createItemsList);

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') { return };
  lightboxContainer.classList.add('is-open');
  lightboxImg.src = e.target.dataset.source;
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onArrowRightPress);
  window.addEventListener('keydown', onArrowLeftPress);
  // console.log(e.target.dataset.source)
};

closeModalBtn.addEventListener('click', onModalClose);

function onModalClose() {
  // if (e.target.nodeName === 'IMG') { return };
  lightboxContainer.classList.remove('is-open');
  lightboxImg.src = '';
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onArrowRightPress);
  window.removeEventListener('keydown', onArrowLeftPress);
};

lightboxOverlay.addEventListener('click', onOverlayClick);

function onOverlayClick() {
  onModalClose();
};

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onModalClose();
  };
};

const newArr = galleryItems.map((item) => item.original);

function onArrowRightPress(e) {
  const index = newArr.indexOf(lightboxImg.src);
  if (e.code === 'ArrowRight') {
    if (index !== galleryItems.length-1) { lightboxImg.src = newArr[index + 1] }
    else { lightboxImg.src = newArr[0] }
    // console.log(index)
    // console.log(`нажал вправо`);
  };
};

function onArrowLeftPress(e) {
  const index = newArr.indexOf(lightboxImg.src);
  if (e.code === 'ArrowLeft') {
    if (index !== 0) { lightboxImg.src = newArr[index - 1] }
    else { lightboxImg.src = newArr[newArr.length-1] }
    // console.log(index)
    // console.log('нажал влево');
  };
};






