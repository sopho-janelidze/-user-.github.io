//password validation 

//At least one digit [0-9]
//At least one lowercase letter [a-z]
//At least one uppercase letter [A-Z]
//At least one special character \W (non-word character)
//Length between 8 and 16 characters {8,16}
//No whitespace allowed (?!.* )



let password = document.getElementById ('pass');

function passwordvalidation () {
    let passwordvalue = document.getElementById ('pass').value

    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

    let passwordError= document.querySelector('.error-password');
    if (passwordvalue.match(regex)){
        passwordError.innerText = 'your password is valid';
        passwordError.style.color ='green';
    } else {
        passwordError.innerText = 'your password is  not valid';
        passwordError.style.color ='red';
    }

     if (passwordvalue === "") {
        passwordError.innerText = "";
     }

}

password.addEventListener('keyup',passwordvalidation);