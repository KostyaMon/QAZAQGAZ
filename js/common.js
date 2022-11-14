const mediaQuery480 = window.matchMedia('(max-width: 480px)')

new Swiper('.swiper', {
	simulateTouch: true,
	slidesPerView: "auto",
	// autoHeight: true,
	watchOverflow: true,
	spaceBetween: mediaQuery480.matches ? 13 : 24,
});

// let menuArrows = document.querySelectorAll('.menu__arrow');
//
// if (menuArrows.length > 0) {
// 	for (let i = 0; i < menuArrows.length; i++) {
// 		const menuArrow = menuArrows[i];
// 		menuArrow.addEventListener("click", () => {
// 			menuArrow.parentElement.classList.toggle('_active');
// 		});
// 	}
// }

//=================== Cap, temporary
document.addEventListener('DOMContentLoaded', function () {
	const body = document.querySelector('body');
	const quiz = document.getElementById('quizzes');
	const quizForm = document.getElementById('quiz__form');
	const step1 = document.getElementById('quiz__step1');
	const step1Btn = document.getElementById('step1-btn');
	const step2 = document.getElementById('quiz__step2');
	const step2Btn = document.getElementById('step2-btn');
	const step3 = document.getElementById('quiz__step3');
	const step3Btn = document.getElementById('step3-btn');
	const step4 = document.getElementById('quiz__step4');
	const step4Btn = document.getElementById('step4-btn');
	const step5 = document.getElementById('quiz__step5');
	const step5Btn = document.getElementById('step5-btn');
	
	const quizBtbStart = document.getElementById('quiz__btn-start');
	const quizBtnSubmit = document.getElementById('quiz__btn-submit');

// quiz.addEventListener('change', () => {
// 	//logic answers
// })
	
	quizBtbStart.addEventListener('click', (e) => {
		e.preventDefault()
		quiz.style.backgroundImage = "url('img/interview-bg6.jpg')"
		setTimeout(() => {
			body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			document.body.classList.add("_lock");
			quiz.classList.add("quizzes_open");
			quizForm.classList.add("form_open");
		}, 0)

	});
	
	quizBtnSubmit.addEventListener('click', (e) => {
		e.preventDefault()
		quiz.style.backgroundImage = "url('img/interview-bg1.jpg')"
		quizForm.classList.remove("form_open");
		step1.classList.add("quiz_open");
	});
	
	step1Btn.addEventListener('click', () => {
		setTimeout(() => {
			quiz.style.backgroundImage = "url('img/interview-bg2.jpg')"
			step1.classList.remove("quiz_open");
		}, 300)
		step2.classList.add("quiz_open");
	})
	
	step2Btn.addEventListener('click', () => {
		setTimeout(() => {
			quiz.style.backgroundImage = "url('img/interview-bg3.jpg')"
			step2.classList.remove("quiz_open");
		}, 300)
		step3.classList.add("quiz_open");
	})
	
	step3Btn.addEventListener('click', () => {
		setTimeout(() => {
			quiz.style.backgroundImage = "url('img/interview-bg4.jpg')"
			step3.classList.remove("quiz_open");
		}, 300)
		step4.classList.add("quiz_open");
	})
	
	step4Btn.addEventListener('click', () => {
		setTimeout(() => {
			quiz.style.backgroundImage = "url('img/interview-bg5.jpg')"
			step4.classList.remove("quiz_open");
		}, 300)
		step5.classList.add("quiz_open");
	})
//
	step5Btn.addEventListener('click', () => {
		quiz.style.backgroundImage = "none"
		document.body.classList.remove("_lock");
		step5.classList.remove("quiz_open");
		quiz.classList.remove("quizzes_open");
		body.style.paddingRight = '0px';
	})
});
//=================================================

// Menu Burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_menuActive");
		menuBody.classList.toggle("_menuActive");
		menuBody.classList.toggle("menu__body_before");
	})
}

// Smooth Scroll
const menuLinks = document.querySelectorAll(".menu__link[data-goto]")

if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick)
	});

	function onMenuLinkClick(e) {
		// const mediaQuery768 = window.matchMedia('(max-width: 768px)')
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains("_menuActive")) {
				document.body.classList.remove("_lock");
				iconMenu.classList.remove("_menuActive");
				menuBody.classList.remove("_menuActive");
			}
			
			e.preventDefault();
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			// if (mediaQuery768.matches) {
			// 	window.scrollTo({
			// 		top: gotoBlockValueHeaderOffset,
			// 		behavior: "smooth"
			// 	});
			// }
		}
	}
}