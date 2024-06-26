import Swiper from 'swiper';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';
import { getData } from './portfolio-api';

const btnPrev = document.querySelector('.reviews__arrow-left');
const btnNext = document.querySelector('.reviews__arrow-right');
const reviewsList = document.querySelector('.reviews__list');

document.addEventListener('DOMContentLoaded', () => {
  let result;
  getData()
    .then(data => {
      result = data
        .map(item => {
          return `
      <li class="reviews__item swiper-slide">
      <img
        width="48"
        class="reviews__img"
        src="${item.avatar_url}"
        alt="${item.author}"
      />
      <h3 class="reviews__h3">${item.author}</h3>
      <p class="reviews__descr">${item.review}</p>
    </li>`;
        })
        .join('');
      reviewsList.insertAdjacentHTML('beforeend', result);
    })
    .catch(error => {
      reviewsList.insertAdjacentHTML(
        'beforeend',
        `<p class="non_info">NOT FOUND</p>`
      );
      iziToast.error({
        position: 'topRight',
        message: 'Sorry, there are no reviews. Please reload your page!',
      });
      console.log(error);
    });
});

const swiper = new Swiper('.reviews__swiper', {
  modules: [Keyboard],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 400,
  spaceBetween: 100,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

btnPrev.addEventListener('click', () => {
  swiper.slidePrev();
});

btnNext.addEventListener('click', () => {
  swiper.slideNext();
});

swiper.on('fromEdge', () => {
  btnPrev.classList.remove('disabled_btn');
  btnNext.classList.remove('disabled_btn');
});

swiper.on('reachBeginning', () => {
  btnPrev.classList.add('disabled_btn');
  btnNext.classList.remove('disabled_btn');
});

swiper.on('reachEnd', () => {
  btnNext.classList.add('disabled_btn');
  btnPrev.classList.remove('disabled_btn');
});
