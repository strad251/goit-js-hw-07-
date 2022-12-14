import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.js-gallery');

const galleryTemplate = ({preview, original, description}) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
};

const addImg = galleryItems.map(galleryTemplate).join("");

galleryContainer.insertAdjacentHTML("afterbegin", addImg);

const openImg = event => {
  const { target } = event;
  event.preventDefault();
  if (target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: instance => {
        document.addEventListener('keydown', onEscKeyDown);
      },
      onClose: instance => {
        document.removeEventListener('keydown', onEscKeyDown);
      },
    }
  );

  instance.show();

  function onEscKeyDown(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
};
  

galleryContainer.addEventListener('click', openImg)






