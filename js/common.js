//=================== Custom, temporary
const DATA = [
	{
		question: 'Question 1',
		answer: [
			{
				id: '0',
				value: 'answer 1'
			}
		]
	}
];

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
const quizQuestion = document.getElementById('quiz__question');

const quizBtbStart = document.getElementById('quiz__btn-start');
const quizBtnSubmit = document.getElementById('quiz__btn-submit');

quiz.addEventListener('change', () => {
	//logic answers
})

// quiz.addEventListener('click', (e) => {
// 	//btn next
// 	console.log(e)
// })

quizBtbStart.addEventListener('click', (e) => {
	e.preventDefault()
	document.body.classList.toggle("_lock");
	quiz.classList.remove("_display-none");
	quizForm.classList.remove("_display-none");
});

quizBtnSubmit.addEventListener('click', (e) => {
	e.preventDefault()
	quizForm.classList.toggle("_display-none");
	step1.classList.remove("_display-none");
});

step1Btn.addEventListener('click', (e) => {
	e.preventDefault()
	step1.classList.toggle("_display-none");
	step2.classList.remove("_display-none");
})

step2Btn.addEventListener('click', () => {
	step2.classList.toggle("_display-none");
	step3.classList.remove("_display-none");
})

step3Btn.addEventListener('click', () => {
	step3.classList.toggle("_display-none");
	step4.classList.remove("_display-none");
})

step4Btn.addEventListener('click', () => {
	step4.classList.toggle("_display-none");
	step5.classList.remove("_display-none");
})

step5Btn.addEventListener('click', () => {
	step5.classList.toggle("_display-none");
	document.body.classList.remove("_lock");
	quiz.classList.toggle("_display-none");
})

//=================================================

// Menu Burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_menuActive");
		menuBody.classList.toggle("_menuActive");
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