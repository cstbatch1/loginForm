document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();

    const userNumber = document.getElementById("number").value;
    const userPassword = document.getElementById("password").value;
    // for error Message
    const errorMessage = document.getElementById("error");

    // valid phone number
    const validNumber = /^01[0-9]{9}$/;
    const validPassword = /^[A-Za-z0-9]{4,10}$/;

    if(!validNumber.test(userNumber)){
        errorMessage.textContent ="Please Input Valid Number";
        errorMessage.style.color="red";
        return;
    }
    if(!validPassword.test(userPassword)){
        errorMessage.textContent ="Please Input Valid Password";
        errorMessage.style.color="red";
        return;
    }

    //input field clear
    document.getElementById("number").value="";
    document.getElementById("password").value="";

    // Login new window
    window.location.href="dashboard.html";

})