function validate_password() {
	let password = document.getElementById('password').value;
	let password_confirmation = document.getElementById('password-confirmation').value;
	let submit = document.getElementById('submitbtn');
	if (password != password_confirmation) {
		document.getElementById('error_msg').innerHTML = '*Passwords do not match';
		submit.disabled = true;
	}
	else if (password == password_confirmation) {
		document.getElementById('error_msg').innerHTML = '';
		submit.disabled = false;
	}
}