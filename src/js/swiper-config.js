import Swiper from 'swiper';
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function initPcSwiper() {
	return new Swiper('.pc', {
		modules: [Pagination, Mousewheel],
		direction: 'vertical',
		slidesPerView: 1,
		mousewheel: true,
		pagination: {
			el: '.aside__pagination',
			clickable: true,
		},
	});
}


export function initCommentSwiper() {
	return new Swiper('.comment__inner', {
		modules: [Pagination, Navigation, Mousewheel],
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.comment__pagination',
			type: "fraction",
		},
		navigation: {
			nextEl: ".comment__button-next",
			prevEl: ".comment__button-prev",
		},
	});
}
