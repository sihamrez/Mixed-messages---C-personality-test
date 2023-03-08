let navLinks = document.querySelectorAll('li');

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});

