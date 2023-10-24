
function showPopup() {
    if (validate()) {
        const fname = document.getElementById('firstName').value;
        const lname = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const proffession = document.getElementById('proffession').value;
        const email = document.getElementById('email').value;
        const mobnum = document.getElementById('mobNumber').value;

        var ele = document.getElementsByName('gender');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                document.getElementById("popupGender").innerHTML
                    = ele[i].value;
        }
        document.getElementById('popupFname').textContent = fname;
        document.getElementById('popupLname').textContent = lname;
        document.getElementById('popupDob').textContent = dob;
        document.getElementById('popupCountry').textContent = country;

        document.getElementById('popupProffession').textContent = proffession;
        document.getElementById('popupEmail').textContent = email;
        document.getElementById('popupMobnum').textContent = mobnum;

        document.getElementById('overlay').style.display = 'block';
        document.getElementById('popup').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

function submitForm() {
    closePopup();


    setTimeout(function () {
        alert('Form submitted successfully.');
    }, 1);

    location.reload();

}


function validate() {

    if (!validateName(document.myForm.firstName.value.trim())) {

        document.getElementById('fnameError').textContent = "Please provide valid first name!";
        document.myForm.firstName.focus();
        return false;
    } else {
        document.getElementById('fnameError').textContent = "";
    }

    if (!validateName(document.myForm.lastName.value.trim())) {

        document.getElementById('lnameError').textContent = "Please provide valid last name!";
        document.myForm.lastName.focus();
        return false;
    } else {
        document.getElementById('lnameError').textContent = "";

    }

    if (!validateDob(document.myForm.dob.value)) {

        document.getElementById('dobError').textContent = "Please provide valid Date of Birth!";
        document.myForm.firstName.focus();
        return false;
    } else {
        document.getElementById('dobError').textContent = "";

    }

    if (document.myForm.Country.value == "-1") {

        document.getElementById('countryError').textContent = "Please select your country!";
        return false;
    } else {
        document.getElementById('countryError').textContent = "";

    }

    if (!validateGender()) {

        document.getElementById('genderError').textContent = "Please select one checkbox among genders!";
        document.myForm.firstName.focus();
        return false;
    } else {
        document.getElementById('genderError').textContent = "";

    }

    if (document.myForm.proffession.value.trim() == "") {

        document.getElementById('proffessionError').textContent = "Please provide your proffession!";
        document.myForm.firstName.focus();
        return false;
    } else {
        document.getElementById('proffessionError').textContent = "";

    }

    if (!validateEmail(document.myForm.email.value)) {

        document.getElementById('emailError').textContent = "Please provide a valid Email!";
        document.myForm.email.focus();
        return false;

    } else {
        document.getElementById('emailError').textContent = "";

    }

    if (!validateMobileNumber(document.myForm.mobNumber.value.trim())) {

        document.getElementById('mobnumError').textContent = "mobile number sholuld contain 10 digits!";
        document.myForm.email.focus();
        return false;

    } else {
        document.getElementById('mobnumError').textContent = "";

    }
    removeEventListener



    return (true);
}

function validateEmail(email) {
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    if (email == "") {
        return false;
    }
    else if (atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1) {
        return true;
    }

    return false;
}

function validateName(name) {
    var regName = /^[a-zA-Z]+[a-zA-Z\s]*?[^0-9]$/;
    // var regName =/^[A-Za-z\s]+$/;
    // alert(name);
    if (!regName.test(name)) {
        return false;
    }
    return true;
}

function validateDob(dob) {
    if (dob == "") {
        return false;
    }
    const parsedDate = new Date(dob);


    const currentDate = new Date();
    if (parsedDate > currentDate) {
        return false;
    }
    return true;
}

function validateMobileNumber(mobile) {

    var regMobile = /^\d{10}$/;

    if (!regMobile.test(mobile)) {
        return false;
    }

    return true;
}
function validateGender() {
    var ele = document.getElementsByName('gender');
    var count = 0;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            count++;
        }
    }

    if (count == 1) {
        return true;
    }
    else {
        return false;
    }
}
function resetAll() {
    document.getElementById('fnameError').textContent = "";
    document.getElementById('lnameError').textContent = "";
    document.getElementById('dobError').textContent = "";
    document.getElementById('countryError').textContent = "";
    document.getElementById('genderError').textContent = "";
    document.getElementById('proffessionError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('mobnumError').textContent = "";

}