// let myForm = document.forms["myForm"];
// let username=myForm["username"].value;
// let email=myForm["email"].value;
// let password=myForm["password"].value;
// let passwordConfirm=myForm["passwordConfirm"].value

// function validateForm() {
    // if (username=="") {
    //     alert("Please enter your Username");
    //     myForm["username"].focus();
    //     return false;
    // }
    // if (email==""){
    //     alert("Please enter your Email")
    //     myForm["email"].focus();
    //     return false;
    // }
    // if (password=="") {
    //     alert("Please enter your Password");
    //     myForm["password"].focus;
    //     return false;
    // }
    // if (passwordConfirm!=password) {
    //     alert("Password and confirm password do not match");
    //     myForm["passwordConfirm"].focus;
    //     return false;
    // }
    // if (username!="" && emai!="" && password!="" && passwordConfirm==password) {
    //     alert("Registration successfull");
    // }
    // return true;
// }



// function myFunction() {
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//     localStorage.setItem('email', email);
//   }

$(document).ready(function() {
    $("#signup-form").submit(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        var email = $("#email").val();
        var passwordConfirm = $("#passwordConfirm").val();
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("passwordConfirm", passwordConfirm);
        localStorage.setItem("email", email);
        
        if (username=="") {
            alert("Please enter your Username");
            myForm["username"].focus();
            return false;
        }
        if (email==""){
            alert("Please enter your Email")
            myForm["email"].focus();
            return false;
        }
        if (password=="") {
            alert("Please enter your Password");
            myForm["password"].focus;
            return false;
        }
        if (passwordConfirm!=password) {
            alert("Password and confirm password do not match");
            myForm["passwordConfirm"].focus;
            return false;
        }
        if (username!="" && emai!="" && password!="" && passwordConfirm==password) {
            alert("Registration successful");
            return true;
        }
    })

    $("#login-form").submit(function() {
        var enteredName = $("#username2").val();
        var enteredPass = $("#password2").val();

        var storedName = localStorage.getItem("username");
        var storedPass = localStorage.getItem("password");
        
        if (enteredName == storedName && enteredPass == storedPass) {
            alert('You are logged in!');
        } else {
            alert('Username and Password do not match!');
        }
    })
});

