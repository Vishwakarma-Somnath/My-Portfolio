const form = document.querySelector('form');

function sendEmail() {
	const fullName = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const subject = document.getElementById('subject').value;
	const mess = document.getElementById('message').value;

	const bodyMessage = `
		Full Name: ${fullName}<br>
		Email: ${email}<br>
		Phone Number: ${phone}<br>
		Message: ${mess}
	`;

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "somnathv615@gmail.com",
		Password: "1808058104700483A2E9D41908FCCC44776A",
		To: 'somnathv615@gmail.com',
		From: "somnathv615@gmail.com",
		Subject: subject,
		Body: bodyMessage
	}).then(message => {
		if (message === "OK" || message === "success") {
			Swal.fire({
				title: "Good job!",
				text: "Email has been sent successfully!",
				icon: "success"
			});
		} else {
			Swal.fire({
				title: "Error!",
				text: "Email sending failed.",
				icon: "error"
			});
		}
	});
}

function checkInputs() {
	const items = document.querySelectorAll(".items");
	let valid = true;

	for (const item of items) {
		if (item.value.trim() === "") {
			item.classList.add("error");
			item.parentElement.classList.add("error");
			valid = false;
		} else {
			item.classList.remove("error");
			item.parentElement.classList.remove("error");
		}
	}
	return valid;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (checkInputs()) {
		sendEmail();
	}
});
