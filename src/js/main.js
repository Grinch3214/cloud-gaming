import { initPcSwiper, initCommentSwiper } from './swiper-config.js';
import '../scss/style.scss'
// import { initSelect, navigationSelect, navigationSelectFixed } from './dropdown.js';
import { initVideoButton } from './video.js'

// initSelect(navigationSelect);
// initSelect(navigationSelectFixed);
initVideoButton();


let swiperPc = null;
let swiperComment = null;

function handlePcSwiperResize() {
	const width = window.innerWidth;

	if (width >= 768 && !swiperPc) {
		swiperPc = initPcSwiper();
	} else if (width < 768 && swiperPc) {
		swiperPc.destroy(true, true);
		swiperPc = null;
	}
}

function handleCommentSwiperResize() {
	const width = window.innerWidth;
	if (width < 768 && !swiperComment) {
		swiperComment = initCommentSwiper();
	} else if (width >= 768 && swiperComment) {
		swiperComment.destroy(true, true);
		swiperComment = null;
	}
}


handlePcSwiperResize();
handleCommentSwiperResize();

window.addEventListener('resize', handlePcSwiperResize);
window.addEventListener('resize', handleCommentSwiperResize);