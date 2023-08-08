// DOM - Document Object Modal

// console.log(document);

// Do while 
// While 
// for 
// foreeach

// let arr = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img1', 'img2', 'img3', 'img4', 'img5', 'img6']  



// If we dont know the Range 
// let index = 0

// while(index < arr.length){
//     console.log(arr[index]); 
//     index++
// }


// For Loop
// for(let index=0; index < arr.length; index++){
//     console.log(arr[index]); 
// }


// for(let item of arr){
//     console.log(item);
// }

// arr.forEach((item) =>{
//     console.log(item);
// })

// var login = document.getElementsByClassName('loginBtn')[0]
// var login = document.getElementById('login')
// var login = document.querySelector('ul')
// var buttons = document.querySelectorAll('.booknow')

// console.log(buttons);

// login.style.backgroundColor = 'red'

// var login = document.getElementById('login')

// var text = document.querySelector('.bannerContent h1')

// function ChangeColor(){
//     text.innerHTML = 'Hey i am changed'
// }

// login.addEventListener("click", ChangeColor)



// var left = document.getElementsByClassName('left')[0]
// var right = document.getElementsByClassName('right')[0]

// var cardsList = document.getElementsByClassName('cardsList')[0]


// function movetheSliderLeft(){
//     console.log("Click");
//     value = value - 100
//     cardsList.style.left = `${value}px`
// }

// function movetheSliderRight(){
//     console.log("Click");
//     value = value + 100
//     cardsList.style.left = `${value}px`
// }


// var value = 0 

// left.addEventListener('click', function(){
//     value = value - 500
//     cardsList.style.left =  `${value}px`
//     cardsList.style.transition =  `0.2s`

// })

// right.addEventListener('click', function(){
//     value = value + 500
//     cardsList.style.left = `${value}px`
//     cardsList.style.transition =  `0.5s`
// })



// var button = document.querySelector('.start')

// button.style.backgroundColor = 'red'
// button.style.fontSize = '20px'
// button.style.width = '400px'
// button.style.height = '100px'


// function nam(event){
//     event.target.innerHTML = 'I am changed'
//     button.classList.toggle('extra')
// }


// button.addEventListener('click', nam)

// button.insertAdjacentElement('afterbegin')


// var viewAllMent = document.createElement('button')
// viewAllMent.innerText = `All Mentors`
// viewAllMent.classList.add('viewAll')
// viewAllMent.classList.add('btn')
// viewAllMent.id = 'newID'

// viewAllMent.setAttribute('id', 'newID')

// document.querySelector('.mentorsActions').appendChild(viewAllMent)

// console.log(viewAllMent);


// var skjnfskndj = 'sdfsdkj' ES5

// let ES6
// const ES6

// const name1;
// console.log(name1);



// const name1 = "Prem"


// if(true){
//     const blockScope = 'I am block scope'

// }

// function sdfksdf(){
//     var functionScope = 'I am Function Scoper'
// }


// console.log(functionScope);

// GLOBAL 
// BLOCK SCOPE
// FUNCTION SCOPE


// Var  Global variable
    // Global
    // BLOCK scope
    // Function scope wont work
    // Reclaration are allowed

// let - Block level variable
    // Global
    // Block Scope wont work
    // Func Scope wont work
    // Redeclaration not allowed

// Const - Block level variable
    // Global   
    // Block Scope wont work
    // Func Scope wont work
    // Redeclaration not allowed



// Hoisting
    // Variable cant be called before it has been declared
    
    // var will hoist
    // let const will not 




// let a = 2 

// {

//     {
//         let a = 4

//         {
//             let a = 5
//             console.log("195", a); //5
//         }
//         console.log("197", a); //4

//     }

//     console.log("201", a); //

// }

// console.log("205", a); //2


// Closure Javacript
// var count = 5

// function fn1(){
//     console.log("209", count); // undefined 
    // var count = 10 
//     function inner(){
//         console.log("212", count); // 10
//     }
//     inner()
//     console.log("214", count); // 10
// }


// fn1()



// const nam = "Prem"

// nam = "karthi"




// const f1 = {
//     name : "sdfsadk",
//     age : "23"
// }


// f1.name = "karthi"

// console.log(f1);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const sports = ["Cricket", "Football"]

// const arr = [1,3,4,5,6,67,8,4,57,23,[2,32,[4,5,3]]]

// fruits.push("knsdfkjsdnfjkn") adding value in the last

// fruits.unshift("skdjfnsdkjfskdf") adding value in the beggning

// fruits.pop() delete the last value

// fruits.shift() delete the first value

// const f2 = fruits.slice(0,2)  slicing the value from array
 
// const f2 = fruits.splice(1, 2, "New")  //Delete and replace

// const f2 = fruits.concat(sports) mering the arrays

// const f2  = fruits.includes("Pom")

// const f2 = fruits.find((item) => item == "Pom")

// const f2 = arr.filter((value) => value > 10) 

// const f2 = arr.flat(3)

// const f2 = fruits.join('----') convert the array to string

// console.log(typeiof f2);


// Map
// reduce
// ForEeach

// remaining array methods



let students = ["Prem", "Karthi", "Sakthi", "Sharanya"]


// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);



// Start
// End
// Increment 



// for(let index = 0;index < students.length;index += 1){
//     console.log(index);
// }

// console.log("End");


// Step  1 : Hide the menu in the smaller device & create the popup for menu in the smaller device
// Step  2 : Show the hamburger icon in the smaller device
// Step  3 : On click of hamburger we should enable the popop
// step  4 : On re click we should disable the popup



let hamburger = document.querySelector('.hamburger')
let mobileModal = document.querySelector('.mobileModal')


let isActive = false
hamburger.addEventListener('click', function(){
    if(isActive){
        mobileModal.style.display = 'none'
        isActive = false
    }
    else{
        mobileModal.style.display = 'flex'
        isActive = true
    }
})