import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const makeImageItemMarkup = image => {
  return `
    <a class="gallery__item" href=${image.original}>
      <img
        class="gallery__image"
        src=${image.preview}
        alt=${image.description}
        title=${image.description}
      />
    </a>`
};

const makeImages = galleryItems
  .map(makeImageItemMarkup)
    .join('');
  
galleryEl.insertAdjacentHTML('beforeend', makeImages);
const lightbox = new SimpleLightbox('.gallery a', { captionDelay:250});
lightbox.on('show.simplelightbox');


