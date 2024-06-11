// Predefined credentials
const predefinedEmail = 'wenhan1122@gmail.com';
const predefinedPassword = 'Wenhan11@22';

function validateLoginForm() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        alert("Please enter your email.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation
    if (password.trim() === "") {
        alert("Please enter your password.");
        return false;
    } else if (email !== predefinedEmail || password !== predefinedPassword) {
        alert("Invalid email or password.");
        return false;
    }

    // Redirect to assets HTML on successful login
    window.location.href = 'assets.html';
    return false; // Prevent form submission to avoid refreshing the page
}

const time_to_show_login = 400;
const time_to_hidden_login = 200;

function change_to_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";

    setTimeout(function () { document.querySelector('.cont_form_login').style.opacity = "1"; }, time_to_show_login);

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
    }, time_to_hidden_login);
}

const time_to_show_sign_up = 100;
const time_to_hidden_sign_up = 400;

function change_to_sign_up() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.opacity = "1";
    }, time_to_show_sign_up);

    setTimeout(function () {
        document.querySelector('.cont_form_login').style.display = "none";
    }, time_to_hidden_sign_up);
}

const time_to_hidden_all = 500;

function hidden_login_and_sign_up() {
    document.querySelector('.cont_forms').className = "cont_forms";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
    }, time_to_hidden_all);
}
