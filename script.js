//hamburger menu

const button = document.querySelector('.menu-collapsed');
const newForm = document.getElementById('newForm');
const thanks = document.querySelector('.thankYou');
const form = document.getElementById('contact');
const spinner = document.getElementById('spinner');

newForm.addEventListener('click', () => {
	thanks.style.display = 'none';
	form.classList.remove('visuallyHidden');
});

button.addEventListener('click', () => {
	button.classList.toggle('menu-expanded');
});

function contact(event) {
	event.preventDefault();
	form.classList.add('visuallyHidden');
	spinner.style.display = 'flex';

	emailjs
		.sendForm(
			'service_1xou5c7',
			'template_p68bvop',
			event.target,
			'8X5aCUiGHuFKNdN71'
		)
		.then(() => {
			// form.classList.add('visuallyHidden');
			spinner.style.display = 'flex';
			thanks.style.display = 'block';
			spinner.style.display = 'none';
		})
		.catch(() => {
			form.classList.add('visable');
			alert(
				'Email Service is temporarily unavailable. Please contact me on Sammylam505@gmail.com'
			);
		});
}
