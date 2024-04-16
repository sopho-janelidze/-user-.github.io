
//slider

new Splide( '.splide' ).mount();

 document.addEventListener( 'DOMContentLoaded', function () {
 new Splide( '#image-carousel', {
 heightRatio: 0.5,
} ).mount();
} );


//form validation

const form=document.getElementById ('login');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let errors ={};

    let username= document.getElementById ('userfield').value; 
    if (username === ""){
        errors.username = 'username field can not be empty'
    };

   let passw1 = document.getElementById ('passwfield').value;
   let passw2 = document.getElementById ('passw2field').value;

   if (passw1 === "") {
    errors.Passw = 'Password field can not empty'
   };

   if (passw1 != passw2) {
    errors.Passw2 = 'Password do not match'
   }; 

   let gender = false; 
    this.querySelectorAll ('.radio-gender').forEach (item => {
        if (item.checked) {
            gender=true;
        }
    })
 
        if (gender ===false) {
            errors.gender = 'select your gender'
        };

        let agree= document.getElementById ('checkagree').checked;
        if (!agree) {
            errors.agree = 'you must agree our terms and conditions'
        };

        this.querySelectorAll ('.error-text').forEach ((el) => {
            el.innerText= " ";
        });


        for (let item in errors) {

            let errorElement = document.getElementById ('error-' + item)

            if (errorElement ) {
                errorElement.innerText = errors[item];
            }
        }

        if (Object.keys (errors).length === 0) {
            this.submit();

        }
});

     let hide = document.getElementById ('passhide');

    hide.addEventListener ('click', function(){
        hide.classList.remove('fa-solid fa-eye-slash');
        hide.classList.add ('fa-solid fa-eye');

    })