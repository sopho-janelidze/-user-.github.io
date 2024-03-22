'use strict'


//task 2

let containerElements =  document.querySelectorAll('.container');

containerElements.forEach(function(item){
document.createElement('p');
let titleElement2 = document.createElement('p');
titleElement2.innerText = 'hello';
titleElement2.classList.add ('text');

item.appendChild(titleElement2);
})


//task 1

let newElement = document.createElement('div');
document.getElementById('Dom').appendChild(newElement);

newElement.classList.add ("wraper");

let imageElement = document.createElement ('img');
imageElement.innertext = 'alt=image';
imageElement.setAttribute ('src', "https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80 ");

newElement.appendChild(imageElement);


let headElement = document.createElement ('h2');
headElement.classList.add ('title');
headElement.innerText = "image title";
headElement.style.background = "red";
headElement.style.fontSize = "30px";

newElement.appendChild(headElement);


