function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.newsletter-form');
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const email = formData.get("email");
		
		if ( document.querySelector('.form-message') !== null ) {
			document.querySelector('.form-message').remove();
		}

		var message = document.createElement('div');
		message.classList.add('form-message')

		if ( isEmail( email ) ) {
			message.classList.add('form-success');
			message.innerText = 'Success! Check your email!';
		} else {
			message.classList.add('form-error');
			message.innerText = 'Please enter a valid email address';
		}

		document.querySelector('.form-group').appendChild(message);

	});
});

