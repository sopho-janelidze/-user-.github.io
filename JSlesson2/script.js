'use strict'

//ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let number = 1; number <= 100; number++) {
console.log (number)}

//ამოიღეთ user ცვლადის სტუდენტის სტატუსი;


 let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };
  
  console.log (user.studentstatus)


  //თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user; თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani; თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
  
  let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus == "active"){
    console.log ("hello user")
} else if (user2.name=="levan") {
    console.log ("hello levani")
} else if (user2.studentstatus == 'active' || user2.age < 25) {
    console.log ("hello anna")
} else ( "error")


//  if ახალი მეთოდით

let result = user2.age <18 && user2.studentstatus == "active" ? "hello user" : user2.name == "levan" ? "hello levani" : user2.studentstatus == "active" || user2.age < 25 ? "hello anna" : "error"
{console.log (result)}


// ამოიღეთ მხოლოდ ლუწი რიცხვები

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
 for ( numbers of array6){
if (numbers % 2 == 0) {
    console.log (numbers)
 }
}

// Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია

let array7 = [32, 14, null, '40', 50];

for (let item of array7) {
    if ( item % 5 == 0) {
    console.log (item)}
}

//ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let a of array1) {
    if ( a > 0 && a < 10) {
        console.log (a)
    }
}

//ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for ( let key of array2) {
    if ( key == 5) {
        console.log ("aris");
        break;
    }
}

//გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)

let array5 = [1, 2, 3, 7, 6, 9];

for (let x of array5 ) {
    if (x == 7) {
        continue;
    }
        console.log(x); 
    }

    //ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

    let array3= [1, 2, 3, 4, 5];
   
    let sum=0; 

    for ( i =0; i < array3.length; i++){
        sum += array3 [i];
    }

    console.log (sum)


    //ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

      let array4= [1, 2, 3, 4, 5];
      let sum1 = 0;

    for (let average of array4){
        sum1 += average
    }
        console.log ( sum1/array4.length)

     //კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

     let users = [
        {username: 'giorgi', status: false},
        {username: 'levani', status: false},
        {username: 'anna', status: true}]
    

    for ( let info of users) {
        if ( info.status ==true) {
            console.log (info.username)
        }
    }

    //Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

    let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

    for ( let info1 of array8 ) {
        for ( let info2 of info1)
        if ( info2 >0) {
            console.log(info2)
        }
    }
