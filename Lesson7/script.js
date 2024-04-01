'use strict'

let div = document.getElementById('api');


let request =  new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/unknown'); 

request.addEventListener('load', function(){

    let responsetext = this.responseText;
    let responseJs = JSON.parse(responsetext);
   console.log(responseJs);

   let uli = document.createElement('ul');
   let li = document.createElement('li');
   li.innerText = responseJs.data[4].name;
   uli.appendChild(li);


   let li2 = document.createElement ('li');
   li2.innerText = responseJs.data[2].year;
   uli.appendChild(li2);

   let li3 = document.createElement('li');
   li3.innerText = responseJs.data[5].color;
   uli.appendChild(li3);


   div.appendChild(uli);
})



request.addEventListener('error', function(){});


request.send();