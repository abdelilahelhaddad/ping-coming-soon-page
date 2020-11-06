let form = document.getElementById("form");
let email = document.getElementById("text");

form.addEventListener('submit', e => {
	e.preventDefault();
	emailChecker();
	emailCheckerEmpty();
});

function emailChecker(){
	let Email = email.value;
	if (!isValid(Email)) {
		document.getElementById("error").textContent = "Please provide a valid email address";
		email.classList.add("error");
	}
	else{
		document.querySelector(".success").textContent = "Thank You For Submiting Your Email";
		document.querySelector('label').removeAttribute('id');
	}
}

function emailCheckerEmpty(){
	let Email = email.value;
  if (Email.trim() === '') {
		document.getElementById("error").textContent = "Whoops! It looks like you forgot to add your email";
		email.classList.add("error");
	}
}

function isValid(Email) {
	const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regx.test(String(Email).toLowerCase());
}
