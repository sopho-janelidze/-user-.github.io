'use strict'

//ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
10, 50, 6, 7, 8, 11, 6, 3, 9

let number = [10, 50, 6, 7, 8, 11, 6, 3, 9]
let sum = 0;

function numbersum () {

for ( let num of number) {
    sum+=num;
 }
 console.log (sum)
}
numbersum (number);


//დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

function nmb (x) {
    if (x % 2 === 0) {
       return "this number is even"
    } else {
        return "this number is odd"
    }

}
let result = nmb (11)
console.log (result)

//ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 


let userAge = ( birthyear, nowyear) => {
    let Age = nowyear - birthyear;
    return Age
};
let result2 = userAge (2010,2024)
let userinfo = result2 < 18 ? "arasrulwlovani" : "srulwlovani";
console.log (result2)
console.log (userinfo)

//for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1,2,3,4,5];
array.reverse (); 
console.log (array); 

//ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით 

    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: true
      }
    
      let printname = ""
 for ( let personalinfo in user) {
    if (user.isloggedin === true) {
    printname =  `${user.firstname}  ${user.lastname}`;
    } 
 } console.log (printname)

