function check_login() {
    var email = document.getElementById("user_name").value;
    var pass = document.getElementById("password").value;
    if (email == "pass@mail.com" && pass == "pass123") {
        alert("Successfully Logged In");
        document.getElementById("user_name").value = "";
        document.getElementById("password").value = "";
    } else {
        var loginForm = document.getElementById("login_form");
        loginForm.classList.remove('shake_effect');
        setTimeout(function () {
            loginForm.classList.add('shake_effect');
        }, 1);
    }
}



function check_password() {
    var password = document.getElementById("password1").value;
    var cpassword = document.getElementById("cpassword").value;

    if (password == cpassword) {
        if (password.length <= 0 && cpassword.length <= 0 || password == null && cpassword == null || password === 'undefined' && cpassword === 'undefined') {
            var loginForm = document.getElementById("login_form");
            loginForm.classList.remove('shake_effect');
            setTimeout(function () {
                loginForm.classList.add('shake_effect');
            }, 1);

// Change border color of element with id "cpass" to red
            document.getElementById("password1").style.border = "1px solid red";
            document.getElementById("cpassword").style.border = "1px solid red";
            document.getElementById("user_name").style.border = "1px solid red";

        } else if (password == cpassword) {
            alert("Successfully Signup");
            document.getElementById("password1").value = "";
            document.getElementById("cpassword").value = "";
            document.getElementById("password1").style.border = "1px solid #10CE88";
            document.getElementById("cpassword").style.border = "1px solid #10CE88";
            document.getElementById("user_name").style.border = "1px solid #10CE88";
        } else {
            alert("Something went wrong");
        }
    } else {
        var loginForm = document.getElementById("cpass");
        loginForm.classList.remove('shake_effect');
        setTimeout(function () {
            loginForm.classList.add('shake_effect');
        }, 1);

        // Change border color of element with id to red
        document.getElementById("cpass").style.border = "1px solid red";
    }
}
