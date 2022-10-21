const button = document.querySelector('.menu-collapsed');

button.addEventListener('click', () => {
	button.classList.toggle('menu-expanded');
});

function contact(event) {
	event.preventDefault();
	const thanks = document.querySelector('.thankYou');
	const form = document.getElementById('contact');
	const spinner = document.getElementById('spinner');
	form.classList.add('visuallyHidden');
	spinner.style.display = 'block';

	emailjs
		.sendForm(
			'service_1xou5c7',
			'template_p68bvop',
			event.target,
			'8X5aCUiGHuFKNdN71'
		)
		.then(() => {
			// form.classList.add('visuallyHidden');
			spinner.style.display = 'none';
			thanks.style.display = 'block';
		})
		.catch(() => {
			form.classList.add('visable');
			alert(
				'Email Service is temporarily unavailable. Please contact me on Sammylam505@gmail.com'
			);
		});
}
