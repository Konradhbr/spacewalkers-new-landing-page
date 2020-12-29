function getValues() {
	var userName = document.getElementById("name").value;
	var userCompany = document.getElementById("company").value;
	var userPhoneNumber = document.getElementById("mobile-number").value;
	var userEmail = document.getElementById("email").value;
	var userMessage = document.getElementById("message").value;	
}

function disappear() {
	var email = document.getElementById('email').value;
	var placeholder = document.getElementById('holderReq');
	if (email != " ") {
		placeholder.style.display = 'none';
	}
	else {}
};

function sendForm() {
	// axios.post(`https://tecra.space/api/spacewalkers/training`, {email: userEmail}).then(res => {
	// 	if (res.status === 200) {
			window.location.reload();

	// 	}
	// });
}
