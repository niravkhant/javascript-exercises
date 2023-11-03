// form validation START

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const submit = document.getElementById("submit");

// Extra email validation function
const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
};

const validateForm = () => {
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirmpasswordVal = confirmpassword.value.trim();

    // validate firstname

    if (firstnameVal === "") {
        setErrorMsg(firstname, "*first name cannot be Blank");
        return false;
    } else if (firstnameVal.length <= 2) {
        setErrorMsg(firstname, "*first name Min. 3 Character");
        return false;
    } else {
        setSuccessMsg(firstname);
    }
    // validate lastname
    if (lastnameVal === "") {
        setErrorMsg(lastname, "*last name cannot be Blank");
        return false;
    } else if (lastnameVal.length <= 2) {
        setErrorMsg(lastname, "*last name Min. 3 Character");
        return false;
    } else {
        setSuccessMsg(lastname);
    }
    // validate email
    if (emailVal === "") {
        setErrorMsg(email, "*Email cannot be Blank");
        return false;
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, "*Please Enter Valid Email");
        return false;
    } else {
        setSuccessMsg(email);
    }
    // validate password
    if (passwordVal === "") {
        setErrorMsg(password, "*Password cannot be Blank");
        return false;
    } else if (passwordVal.length < 6) {
        setErrorMsg(password, "*Enter Minimum 6 Character Password");
        return false;
    } else {
        setSuccessMsg(password);
    }
    // validate confirm password
    if (confirmpasswordVal === "") {
        setErrorMsg(confirmpassword, "*Confirm Password cannot be Blank");
        return false;
    } else if (passwordVal !== confirmpasswordVal) {
        setErrorMsg(confirmpassword, "*Password Not Matching");
        return false;
    } else {
        setSuccessMsg(confirmpassword);
    }
    Swal.fire("Nice!", "Registered Successfully", "success");
    const formData = {
        "First Name": firstnameVal,
        "Last Name": lastnameVal,
        "E-mail": emailVal,
        "Password": passwordVal,
    };
    console.log(formData);
    return true;
};

const setErrorMsg = (input, errormsg) => {
    const formControlDiv = input.parentElement;
    const smallElement = formControlDiv.querySelector("small");
    formControlDiv.className = "form-control error";
    smallElement.innerText = errormsg;
};

const setSuccessMsg = (input) => {
    const formControlDiv = input.parentElement;
    formControlDiv.className = "form-control success";
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
});

// form validation END
