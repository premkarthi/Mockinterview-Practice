// Loosly Type and Interpreted Language

// Primitive Datatype

// console.log(kkkk); //Undefined
// var kkkk; //Inizializer

// var name = "karthi"; //declaration

// var ProfileName = "Prem"; //String
// var Age = "26"; // String
// var Age = 26; // Number/

// var isMale = true; // Boolean

// var score = null;

// Symbol

// BigInt

// console.log(typeof score); //it prints type of is OBJ - bug

// console.log(typeof undefined);
// console.log(typeof isMale);

// Non Primitive Data type - Storing Multiple values by reference

//Array

// var subjectTop = ["sdkjfnsdf"];
// var subject = ["HTML", "CSS", "Javascript", 12, true, undefined, null];

// var names = ["Prem", "Karthi", "Anup", ["sdfsdf", "sdfsdfsd"]];

// // console.log(names.sort());
// // subject.push("Apple")
// // console.log(subject[2]);

// //Object

// var person1 = {
//   name: "Prem",
//   age: 26,
//   phone: 902394123423,
//   subject: ["Maths", "Sceince"],
//   address: {
//     pincode: 2342342,
//     city: "Bangalore"
//   }
// };

// var person2 = {
//   name: "Karthi",
//   age: 26,
//   phone: 902394123423,
//   subject: ["Maths", "Sceince"],
//   address: {
//     pincode: 2342342,
//     city: "Bangalore"
//   }
// };

// let obj2 ={}
// // console.log(Object.values(obj2).length);

// person1.newPr = "Something";
// delete person1.newPr;
// console.log(person1);

//Functions Later

//Primitive types
// var name1 = "Prem"
// var name2 = name1
// name2  = "Karthi"
// console.log(name1);

//Non primitive type
// var obj1 = {
//     name : "Prem",
//     age : 26
// }
// var obj2 = obj1
// obj2.name = "Karthi"
// console.log(obj1);



// Operators

// Arithmetic
// + - / * % ++ --

//Assignment 
// = += -= /= *= %= 

// let first = 10
// first = first + 20
// first +=  20
// console.log(first);


// Comparision Opr
// ==, ===, <, > , <= , >=, != , !== 
//It returns either true or false

// Type Casting

// console.log(10 == '10'); // Its check only value
// console.log(10 === '10'); // Its checks both value and Data type

// console.log(10 <= 10);

// console.log(10 != 10); // Opposite of ==

// console.log(10 !== '10'); // Opposite of ===


// Conditional Opr 
//  ? ,:
// Ternary Operators
// let mark  = 10


// let result = mark >= 35 ? "PASS" : "Fail"
// console.log(result);

// if(mark >= 80){
//     console.log("Grade A");
// }
// else if(mark >= 70  &&  mark < 80){
//     console.log("Grade B");
// }
// else if(mark >= 60 && mark < 70){
//     console.log("Grade C");
// }
// else if(mark >= 35 && mark < 60){
//     console.log("Grade D");
// }
// else{
//     console.log("Student Fail");
// }


// Logical Operator
// && ,|| , !

// Bitwise Operator



// Falsy Values

// false, undefined, null, 0

// 1 ,'sdfsdf' ,true ,''



// let a = 1
// const b = ++a
// const c = a++
// console.log(a)
// console.log(b)
// console.log(c)


// let a = 1 
// console.log(a);
// let b = a++
// console.log(b);
// let c = b++
// console.log(c);



// console.log(Boolean('false'))
// console.log(Boolean(false))

// console.log('3' + 111) // type coiertion
// console.log('3' - 1) // 
// console.log('3' - ' 02 ')
// console.log('3' * ' 02 ')

// console.log(Number('1'))
// console.log(Number('number'))
// console.log(Number(null))
// console.log(Number(false))

// true 1
// false 0
// null 0


// Number('112')
// Boolean()
// String()
// Object()
// Array()


// NAN is Not a number 


// Pure Function
//Creation
// function addSum(a, b, c=0, d=0){ 
//     var result = a + b + c + d
//     return result
// }

// console.log(addSum(100, 200));


// Invoke or execute
// console.log(addSum(10, 100, 30, 50)); // 190 
// console.log(addSum(100, 100)); // 200


// Immediate Invoke Function

// (function(){
//     console.log("I am IIF onload");
//     console.log("I am IIF onload");
// })()


// Anonymas Funcitons
// var addSum = function(a, b, c=0, d=0){
//     var result = a + b + c + d
//     return result
// }

// console.log(addSum(10, 12, 10, 23));

//Arrow functions - ES6

// var addSum = (a, b, c = 0, d = 0) => a + b + c + d
// console.log(addSum(100, 100));


// let var const 
// == / ===
// Hoisting 
// Closure



// console.log("1", JSON.stringify([1,2,null,3]))
// console.log("2",JSON.stringify([1,2,undefined,3]))
// console.log("3",null === undefined)
// console.log("4",null == undefined)
// console.log("5",null == 0)
// console.log("6",null < 0)
// console.log("7",null > 0)
// console.log("8",null <= 0)
// console.log("9",null >= 0)
// console.log("10",undefined == 0)
// console.log("11",undefined < 0)
// console.log("12",undefined > 0)
// console.log("13",undefined <= 0)
// console.log("14",undefined == false)

// console.log(1n == true);

// console.log(0 == false)
// console.log('' == false)
// console.log([] == false)
// console.log(undefined == false)
// console.log(null == false)
// console.log('1' == true)
// console.log(1n == true)
// console.log(' 1     ' == true)


// console.log("1",[] + [])
// console.log("2",[] + 1)
// console.log("3",[[]] + 1)
// console.log("4",[[1]] + 1)
// console.log("5",[[[[2]]]] + 1)
// console.log("6",[] - 1)
// console.log("7",[[]] - 1)
// console.log("8",[[1]] - 1)
// console.log("9",[[[[2]]]] - 1)
// console.log("10",[] + {})
// console.log("11",{} + {})
// console.log("12",{} - {})



// const b = new B()
// console.log(b.foo);
// b.foo  = 1
// console.log(b.foo);
// const c = new C()
// console.log(c.foo);
// c.foo = 2
// console.log(c.foo);
// console.log(b.foo);



// let animal = {
//     jumbs : null
// }
// let rabbit = {
//     __proto__ : animal,
//     jumbs: true
// }

// console.log(rabbit.jumbs);
// delete rabbit.jumbs
// console.log(rabbit.jumbs);
// delete animal.jumbs
// console.log(animal.jumbs);



// var a =1;
// function h(){
//     console.log('a value ',a);
//         if(a){
//             var a = 9
//         }
//     console.log(a)
//     }
// h()


// Shallow copy 
// Deep copy

// Spread Operators  ...
// Rest Operators ...


// this 
// inheritence 
// prototype
// call apply bind



// Spread Operators
// let arr = [1,2,3,4,5]

// let newArr = [...arr]

// newArr[1] = 100

// console.log("OLD",  arr);

// console.log("New", newArr);

//Spread operators will work as a deep copy only for first level values in obj and array
// it wont work for nested obj and array 

// let obj = {
//     firstname : 'Prem',
//     location : "Bangalore",
//     phone : 2390423042,
//     pincode: 32234243,
// }


// let newObj = {...obj}

// newObj.firstname = "Karthi"

// console.log(obj);
// console.log(newObj);

//Rest operators
// function listItems(param1, parem2 , ...parem3){
//     console.log(`hey here is the list ${param1}, ${parem3}`);
// }

// listItems("Prem", "Karthi", "Somthing", "sjadfajsd", "sdfnsadkjfbsd")


//This key is Brower or Window Object
// console.log(this);

// let user1 = {
//     firstname : 'Prem',
//     location : "Bangalore",
//     phone : 2390423042,
//     pincode: 32234243,
//     showDetails : function(age, something){
//         if(this.firstname != undefined && this.location != undefined) {
//             console.log(`Hey i am ${this.firstname}, ${age} old. from ${this.location} - ${something}`);
//         }
//         else{
//             console.log("Data is Invalid");
//         }
//     },
//     getDetails : function(){
//         if(this.firstname != undefined && this.location != undefined) {
//             console.log(`Hey i am ${this.firstname} from ${this.location}`);
//         }
//         else{
//             console.log("Data is Invalid");
//         }
//     }
// }

// let user2 = {
//     firstname : 'Karthi',
//     location : "Krishnagiri",
//     phone : 2390423042,
//     pincode: 32234243,
// }


// Inherience

// user1.showDetails()

// user1.showDetails(25)
// user1.showDetails.call(user2, 25, "Something new")
// user1.showDetails.apply(user2, [25, "Something new"])

// let laterUse = user1.showDetails.bind(user2)

// laterUse(25, "aeonwkdlsnadfkj")

// Call Apply Bind - we can borrow a method from another object
 




// Object.prototype.showDetails = function(){
//     if(this.firstname != undefined && this.location != undefined) {
//         console.log(`Hey i am ${this.firstname} from ${this.location}`);
//     }
//     else{
//         console.log("Data is Invalid");
//     }
// }



"use strict"

let obj=  {
    firstname : "Prem",
    lastname : "karthi",
    //normal fn
    getDetails : function(){
        //arrow fn
        let innerFn = () => {
            console.log(`hello ${this.firstname} - ${this.lastname}`);
        }
        innerFn()
    }

}


// Use stict this keyword issue 

console.log(this);


obj.getDetails()