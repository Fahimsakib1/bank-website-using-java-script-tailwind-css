// Login Form event handler with submit button code
document.getElementById('login-button').addEventListener('click', function(event){
    // console.log("Button Clicked");

    //step-2: get the email value from email field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //step-3: get the password value from password field
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    //step-4: verify email and password (Client side e ei avbe verification kora ekdom thik na)

    if(userEmail === 'fahim@gmail.com' && userPassword === 'fahimerbank'){

        // console.log('Valid User');
        window.location.href = 'bank.html';

    }

    else{
        alert("Please Give Corrent Email And Password To Login ");
        emailField.value = '';
        passwordField.value = '';
    }

    

})