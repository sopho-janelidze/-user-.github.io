'use strict'

//task 9

let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let array5New = array5.map (function (item){
return item / 3 });

console.log (array5New);


//task 10

let array7 =  [15, 100, 25, 10, 36];

array7.splice(3,1); 

console.log(array7); 


//task 11

let array8 = [ 15,100,25, 3,6 ]; 

array8.splice(3,1,'three'); 

console.log(array8); 


//task 14 

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let languagesNew = languages.filter (function(item) {

    return item.length > 3; 

})

console.log (languagesNew); 

//task 17 

let array6 = [-1, -2, -3, 4];

console.log (array6.some((x) => x>0));

//task 8 

let array3 =[1, 2, 3, 4, 5]; 

array3.splice(3,0,'a','b','c');

console.log(array3);

//task 15 

let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let wordsNew = words.filter(function (item){

    return item.toLowerCase().includes ("m")
  

});

console.log (wordsNew);

//task 5

let fruits  =  ['apple', 'mango', 'avocado','kiwi'];

fruits.splice(-2,1,'strawberry');

console.log (fruits);

//task 6

let array10 = [5, 25, 89, 120, 36]; 

array10.push ('javascript', 'python');
array10.unshift ('html', 'css');
console.log (array10);

array10.shift();
array10.pop()

console.log (array10);

//task 2

let info= 'good day';

let infoNew = info.split (" "); 

console.log (infoNew);

let infoNew2 = infoNew.slice(1,2);

console.log (infoNew2);


//task 20 

let array11  = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]].reduce(function (x,y){

 return x.concat(y)
    },[ ] );

    let number = array11.filter (function(item){
        return item >0
    })

    console.log (number);

    //task 7 

    let fruit2 = [ 'orange', 'banana','kiwi' ]; 

    console.log (fruit2); 

    fruit2.push ('apple', 'pineapple')

    fruit2.unshift('watermelon'); 

    console.log (fruit2); 

    fruit2.splice(3,0,'mango');

    fruit2.shift();
    fruit2.pop()

    console.log(fruit2);


    //task 13

    let array4 = [1, 2, 3, 4, 5];
    let sum = 0;

    array4.forEach(function(item){
        sum+=item

    });

    console.log(sum);

    //task 12

    let array1 =['hello1', 14,24, 'hello2'];

    let array9= array1.slice(1,3);

    console.log(array9);


    //task 18

    let numbersNew =  '12345';

    let sum1 = 0;

    Numbers3 = numbersNew.split ( "");

    console.log (Numbers3);

    Numbers3.forEach(function(item){
        sum1+= parseInt(item)
    });
    console.log(sum1);

    //task 19

    let reduceNew = [ 5,19,3,6,2,35].reduce(function(sum,item){
        return sum+item

    },0);

    console.log (reduceNew);

    //task 3 - არ ვიცი სწორად გავიგე თუ არა დავალება

    let stringnew =  'html'; 

    console.log (stringnew.length)

    //task 1

    let array2 = [14, 150, 'css', null, 'javascript', 25];

    let array2New = array2.map (function(item){
if (typeof item === 'number')  {
    return Math.pow(item,2)}
    else if (typeof item === 'string'){
        return item.toUpperCase()
    } else {return item}

    });
        

    console.log(array2New);

    //task 4 ??


    let Question = prompt('What is the capital of Georgia?');
    let answer = 'tbilisi';
    console.log(Question);

    //task 16 ??
    
