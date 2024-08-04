const navigationSelect = document.querySelector('.header__select');
const navigationSelectFixed = document.querySelector('.aside__select');

function initSelect(elem) {
	const selectHolder = elem.querySelector('.select__dropdown');
	const selectOptions = elem.querySelectorAll('.select__dropdown-option li');
	const dropHolder = elem.querySelector('.select__dropdown');
	let selectedOption = selectOptions[0]; // Changed to let

	selectedOption.classList.add('current');

	selectHolder.addEventListener('click', () => {
		dropHolder.classList.toggle('active');
	});

	selectOptions.forEach((currentElement) => {
		currentElement.addEventListener('click', () => {
			selectedOption.classList.remove('current');
			selectedOption = currentElement; // Update selectedOption here
			currentElement.classList.add('current');
			selectHolder.innerText = currentElement.textContent;
			dropHolder.classList.toggle('active');
		});
	});

	document.addEventListener('click', (event) => {
		if (!elem.contains(event.target)) {
			dropHolder.classList.remove('active');
		}
	});
}

export { initSelect, navigationSelect, navigationSelectFixed };