function sendMail(){
    let params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_1hlqevp","template_24ngvhs",params)
        .then(() => alert("Email Sent!!"))
        .catch((error) => {
            alert("Failed to send email: " + error.message);
            console.error(error);
        });
}