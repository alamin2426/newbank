const loginButton = document.getElementById('login-button')

loginButton.addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    if(email === 'alamin@gmail.com' && parseInt(password) === 123456){
        window.location.href = 'banking.html'
    }else{
        alert("Your email and password is wrong!!!")
    }

})