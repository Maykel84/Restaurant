const menu = document.querySelector('#menu')
const nav = document.querySelector('.navbar')

menu.onclick = () => {
	nav.classList.toggle('mobile-menu')
}

const swiper = new Swiper('.home-slider', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
})
