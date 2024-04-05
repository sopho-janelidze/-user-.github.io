'use strict'

//fetch


let divclass = document.getElementById ('container');
let list = document.getElementById ('ullist');
let buttonPrev = document.getElementById ('button1');
let buttonNext =document.getElementById ('button2');
let page = 1; 
let lastpage;



function getUser (page) {
fetch ('https://reqres.in/api/users?page=' + page,
{method: 'GET',})

.then(function(item){
    if (!item.ok){
        throw 'server error'
    }
    return item.json();
})
.then(function(response){
    let fragment = document.createElement('fragment');
    response.data.forEach(element=>{
    
        let li = document.createElement ('li');
        li.innerText = `${element.first_name} ${element.last_name}`;

        fragment.appendChild(li);
    })

    list.innerHTML= "";
    list.appendChild(fragment);
    lastpage = response.total_pages;
})

.catch(function(error){
    console.log('Error:', 'server error');

});

};

buttonNext.addEventListener('click', function (){
  if (page === lastpage) {
    buttonNext.remove();
    return;
  }
 
    page +=1; 
    getUser(page);
});

buttonPrev.addEventListener ('click', function (){
    if (page === 1)
    {buttonPrev.remove();
        return; 
    } 
    page --; 
    getUser (page);
});


getUser(page);
