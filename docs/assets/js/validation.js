// JavaScript Document
/*EMAIL VALIDATION*/
function validateEmail(email){
	var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var elEmailStatus=document.getElementById('emailStatus');
	elEmailStatus.classList.add("alert");
	if (email.value.match(validRegex)){
		elEmailStatus.classList.remove("alert-danger");
		elEmailStatus.classList.add("alert-success");
		elEmailStatus.innerHTML="Email is valid!";
	}
	else{
		elEmailStatus.classList.remove("alert-success");
		elEmailStatus.classList.add("alert-danger");
		elEmailStatus.innerHTML="Email is NOT valid!";
	}
}
var elEmail=document.getElementById('email');
elEmail.addEventListener('blur', function() {validateEmail(elEmail);},false);

/*NAME VALIDATION*/
function validateName(name, nameStatus){
	var validRegex = /^[a-zA-Z\'\- ]+$/;
	nameStatus.classList.add("alert");
	if (name.value.match(validRegex)){
		nameStatus.classList.remove("alert-danger");
		nameStatus.classList.add("alert-success");
		nameStatus.innerHTML="Name is valid!";
	}
	else{
		nameStatus.classList.remove("alert-success");
		nameStatus.classList.add("alert-danger");
		nameStatus.innerHTML="Name is NOT valid!";
	}
}

var elFName = document.getElementById('fname');
var elFNameStatus = document.getElementById('fnameStatus');
elFName.addEventListener('blur', function() {validateName(elFName, elFNameStatus);},false);

var elLName = document.getElementById('lname');
var elLNameStatus = document.getElementById('lnameStatus');
elLName.addEventListener('blur', function() {validateName(elLName, elLNameStatus);},false);

/*PHONE VALIDATION*/
function validatePhone(phone){
	var validRegex = /^[0-9]{10}$/
	var elPhoneStatus=document.getElementById('phoneStatus');
	elPhoneStatus.classList.add("alert");
	
	if (phone.value.match(validRegex)){
		elPhoneStatus.classList.remove("alert-danger");
		elPhoneStatus.classList.add("alert-success");
		elPhoneStatus.innerHTML="Phone is valid!";
	}
	else{
		elPhoneStatus.classList.remove("alert-success");
		elPhoneStatus.classList.add("alert-danger");
		elPhoneStatus.innerHTML="Phone is NOT valid!";
	}
}

var elPhone=document.getElementById('phone');
elPhone.addEventListener('blur', function() {validatePhone(elPhone);},false);

/*COMMENTS VALIDATION*/
function validateComments(comments){
	var validRegex = /.+/
	var elCommentStatus=document.getElementById('commentsStatus');
	elCommentStatus.classList.add("alert");
	
	if (comments.value.match(validRegex)){
		elCommentStatus.classList.remove("alert-danger");
		elCommentStatus.classList.add("alert-success");
		elCommentStatus.innerHTML="Comments are valid!";
	}
	else{
		elCommentStatus.classList.remove("alert-success");
		elCommentStatus.classList.add("alert-danger");
		elCommentStatus.innerHTML="Comments are NOT valid!";
	}
}

var elComments=document.getElementById('comments');
elComments.addEventListener('blur', function() {validateComments(elComments);},false);

















