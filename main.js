import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

// 假設這裡之後會由後端或 localStorage 判斷
const isLoggedIn = false;

window.addEventListener('DOMContentLoaded', () => {
  const guest = document.querySelector('.nav-guest');
  const user  = document.querySelector('.nav-user');

  if (isLoggedIn) {
    guest?.classList.add('d-none');
    user?.classList.remove('d-none');
    user?.classList.add('d-flex');
  }
});

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination], // 記得加這個，否則箭頭和分頁不會動
  slidesPerView: 1.1,   // 手機：1.1 張（露出下一張一點點）
  spaceBetween: 24,     // 卡片之間的間距 px
  breakpoints: {
    768: {
      slidesPerView: 2, // 平板 ≥768px
    },
    992: {
      slidesPerView: 2.75, // 桌機 ≥992px
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

AOS.init();
