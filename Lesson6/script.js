'use strict'

//to do list 

let input =  document.getElementById('inputlist');
let btnClick = document.getElementById ('clickbtn');
let ulList = document.getElementById('listitem"');
let btnicon2 = document.getElementById ('btnicon');
let list2 = document.getElementById ('listitem');
let form =  document.getElementById ('formElement');

form.addEventListener('submit' , function(e){
    e.preventDefault();
    let infoValue = inputlist.value;
    // console.log (infoValue);

    if (infoValue === "") return;

    let list = document.createElement ('li');
    list.textContent = infoValue;

    let btn =  document.createElement ("button");
    btn.textContent = 'delete this Item';
    btn.addEventListener('click', function(){
        list.remove();
        btn.remove();

})
    

    // let list2 = document.getElementById ('listitem');
    list2.appendChild(list);
    list2.appendChild(btn);

    input.value = " ";
 
   
});

btnicon2.addEventListener('click', function(){
    list2.innerHTML = "";
})
  

//burger bar 

let nav = document.getElementById ('navbar');
let burger = document.getElementById('burger');


burger.addEventListener('click', function(){
    nav.classList.toggle ('activenav')
})