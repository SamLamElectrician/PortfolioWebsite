const button = document.querySelector('.menu-collapsed');

button.addEventListener('click', () => {
	button.classList.toggle('menu-expanded');
});

function contact(event) {
	event.preventDefault();
	const thanks = document.getElementById('thankYou');
	const form = document.getElementById('form');
	emailjs
		.sendForm(
			'service_1xou5c7',
			'template_p68bvop',
			event.target,
			'8X5aCUiGHuFKNdN71'
		)
		.then(() => {
			form.classList.remove('visable');
			thanks.classList.remove('visuallyHidden');
		})
		.catch(() => {
			form.classList.remove('visable');
			alert(
				'Email Service is temporarily unavailable. Please contact me on Sammylam505@gmail.com'
			);
		});
}
