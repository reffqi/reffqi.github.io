var mainForm = document.getElementById("main-form");
mainForm.addEventListener("submit", function(event) {
event.preventDefault();
if (document.getElementById("username").value === "") {
	alert("Username Tidak Boleh Kosong!");
	return false;
} else if (document.getElementById("password").value === "") {
	alert("Password Tidak Boleh Kosong!");
	return false;
} else if (document.getElementById("confirmpassword").value === "") {
	alert("Konfirmasi Password Tidak Boleh Kosong!");
	return false;
} else if (document.getElementById("email").value === "") {
	alert("Email Tidak Boleh Kosong!");
	return false;
} else if (document.getElementById("confirmemail").value === "") {
	alert("Konfirmasi Email Tidak Boleh Kosong!");
	return false;
} else if (document.getElementById("password").value !== document.getElementById("confirmpassword").value) {
	alert("Password Tidak Sama");
	return false;
} else if (document.getElementById("email").value !== document.getElementById("confirmemail").value) {
	alert("Email Tidak Sama");
	return false;
} else if (document.getElementById("username").value.length < 6) {
	alert("Username Minimal 6 Karakter");
	return false;
} else if (document.getElementById("password").value.length < 6) {
	alert("Password Minimal 6 Karakter");
	return false;
} 
else {
	alert("Sukses Submit!");
	return true;
}
});