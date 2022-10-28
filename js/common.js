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