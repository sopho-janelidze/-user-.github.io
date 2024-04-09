'use strict'

let mainDivPost=document.getElementById ('postMainwraper');
let overlay = document.getElementById ('overlay');
let content = document.getElementById('descrPost');
let closeIcon =document.getElementById ('close');
let addPost=document.getElementById ('add-post');
let overlayAdd = document.getElementById ('overlayAdd');
let form = document.getElementById ('addPost')


function ajax (url,callback){
    fetch(url, {
        method:'GET'
    })
    .then(function(response){
        if (!response.ok){
            throw 'server Error';
        }
        return response.json();
    })
    .then (function(responseJsPosts){
        console.log(responseJsPosts);
        callback(responseJsPosts);
    })
    .catch (function(error){
        console.log(error);
    })
}

// function ajax(url,callback) {
//     let request = new XMLHttpRequest();
//     request.open ('GET', url);
//     request.addEventListener ('load', function (){
//         let responseJsPosts = JSON.parse (this.responseText);
//        callback(responseJsPosts);
//     });
// request.send();
// }

ajax('https://jsonplaceholder.typicode.com/posts', function(data){
    
data.forEach(element => {
    createPost(element);
    });
});


function createPost(item){ 
    let divEl = document.createElement ('div');
    divEl.classList.add('post');
    divEl.setAttribute('data-id', item.id );

    let h3El= document.createElement ('h3');
    h3El.innerText = item.id;

    let h2El= document.createElement('h2');
    h2El.innerText =item.title;

    let btnDelete = document.createElement('button');
    btnDelete.innerText= 'Delete this post';
    btnDelete.setAttribute('data-delete-id', item.id);
   




    divEl.appendChild(h3El);
    divEl.appendChild(h2El);
    divEl.appendChild(btnDelete);

    btnDelete.addEventListener('click', function(event){
        event.stopPropagation();
        let btnId = this.getAttribute ('data-delete-id');
        let newUrlDelete = `https://jsonplaceholder.typicode.com/posts/${btnId}`;
        fetch (`newUrlDelete`,{
            method:'DELETE',
        }) .then (() => divEl.remove());
        
});
   

    divEl.addEventListener ('click', function(){
        overlay.classList.add('activeOverlay');
        let divId = this.getAttribute('data-id');
        let newUrl= `https://jsonplaceholder.typicode.com/posts/${divId}`;
        ajax(newUrl, function(mosuliObj){
            let p = document.createElement ('p');
            p.innerText = mosuliObj.body;
            content.appendChild(p)});
    });

    mainDivPost.appendChild(divEl);

}

closeIcon.addEventListener('click',function(){
    content.innerHTML="";
    overlay.classList.remove('activeOverlay');
})




addPost.addEventListener ('click', function(){
    overlayAdd.classList.add('activeNewPost');
})

form.addEventListener ('submit', function(e){
 e.preventDefault();
 console.log (e.target[0].value);

 fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'e.target[0].value',
    userId: 11,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((gagzavniliobj) => {
    console.log(gagzavniliobj);
    createPost(gagzavniliobj);});

  overlayAdd.classList.remove('activeNewPost');
  e.target[0].value ="";

});