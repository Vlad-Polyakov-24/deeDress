import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swipers = document.querySelectorAll('[data-swiper]');

const swiperType1 = (el) => {
    const swiper = new Swiper(el, {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

const swiperType2 = (el) => {
    const swiper = new Swiper(el, {
        modules: [Navigation],
        navigation: {
            prevEl: '.reviews__navigation-btn.prev',
            nextEl: '.reviews__navigation-btn.next',
        },
        spaceBetween: 10,
        autoHeight: true,
    });
}

swipers.forEach(swiper => {
    if (swiper.dataset.swiper === 'type-01') swiperType1(swiper);
    if (swiper.dataset.swiper === 'type-02') swiperType2(swiper);
});
