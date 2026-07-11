// alert("Hello World")


//Lega % Illegal 
// - Variable must contain nuber string dollar & underscores
// - can't contain spaces 
// -not be js reserve keyword
// - must be case sensitive
// - the best practice is to write the variable name in cale case lika this 

// const str = parseInt(prompt("Enter your name" , "Mustafa"))
// console.log(str , typeof str);

// const str = 133.56
// console.log(JSON.stringify(str) , str);

// > 
// < 
// >= 
// <= 
// ==
// ===

// const number = [1, 2, 3, 4, 5, 6]
// console.log(number, "original");

// number.pop()
// number.pop()
// number.push(5)
// number.push(6)

// number.shift()
// number.shift()

// number.unshift(1)

// number.unshift(1)

// const newArr = number.slice(0 , -2)
// console.log(newArr , "newArr");

// number.splice(0 , 1, 0 , [{}])

// console.log(number, "change");

// for(var i = 1 ; i <= 15 ; i++){
//     console.log(i);

// if(i === 5){
//     break
// }

// }


// for(var i = 1 ; i<= 3 ; i++){
// for(var j = 1 ; j <= 2 ; j++){
// console.log('*' * 2);

// }
// }

// const str = "my name is Mustafa"
// const newArr =  str.split(" ")
// const arr = []
// console.log(newArr , "newArr"); 


// const capitializeCase =  () => {
// for (let i = 0; i < str.length; i++) {
//     // console.log(str.slice(i, i + 2));
// if(str.slice(i, i + 2) === "  "){
// alert("Double Space not allow")
// return
// }

// for(words of newArr){
// console.log(words.slice(0 , 1).toUpperCase() + words.slice(1).toLowerCase() , "hi")
// const newWord = words.slice(0 , 1).toUpperCase() + words.slice(1).toLowerCase() 
// arr.push(newWord)
// }


// }
// }

// console.log(arr);

// const capitializeWord = arr.join(" ");
// document.write(capitializeWord)

// const num = 2.01
// const roundingNum = Math.round(num)
// const floor = Math.floor(num)
// const ceil = Math.ceil(num)
// console.log(roundingNum);
// console.log(floor);
// console.log(ceil);

// const randomNumbers =  Math.random()
// const randomNumbers =  Math.random() * (Max - Min + 1) + Min
// const randomNumbers =  Math.floor(Math.random() * (10 - 5 + 1) + 5)
// console.log(randomNumbers);

// String to number 
// 1. Number()
// 2. +
// 3. parseInt   (Integer)
// 4. parseFloat  (Decimal)

// Number to string 
// 1. String()
// 2. .toString()
// 3. JSON.stringify()
// 4. .toFixed  (Decimal)


// const userBirthDay = new Date("February 25 , 2010").getTime()
// const now = new Date().getTime()

// const comparisonDate = now - userBirthDay
// const userYears = Math.floor(comparisonDate / 1000 / 60 / 60 / 24 / 365)
// const userMonths = (comparisonDate / 1000 / 60 / 60 / 24 /12)

// console.log(userBirthDay);
// console.log(now);


// const arr = []

// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[5] =6

// console.log(arr)


// function foo (num1 , num2) {
// console.log(num1);
// console.log(num1 , num2);

// }

// foo()

// const foo = (num1 = 0 , num2 = 0) => {
// console.log(num1 + num2);

// }

// foo(200 , 300)

// function foo () {
//     return "Saylani"
// }

// const funcRet = foo()
// console.log(funcRet);
// var i = 39;
// function foo () {
//   i = 32
// return i
// }
// foo()
// console.log(i);

// const day = "Sunday"

// switch (day) {
//     case "Monday": alert("Work Day")
//         break
//     case "Friday": alert("Short Day")
//         break
//     case "Sunday": alert("Wow")
//         break
//     default:
//         alert("Invalid Day")
// }

// for(initialization , condition , increm / decrem){
// block of statment
// }

// let i = 1
// while(i <= 10){
// console.log(i);
// i++
// }


// const obj = {
//     name : "Mustafa",
// email : "mustafa@gamil.com"
// }

// console.log(delete obj.email)
// obj.phone = 982929
// console.log(obj);


// console.log("name" in obj);

// const std = {
//     name : `Muhammad Mustafa`,
//     fatherName : `Muhammad Shahzad`,
//     email :  `mustafa@gamil.com`,
//     fullName : function () {
//  return `${this.name} ${this.fatherName}`
//     }
// }

// console.log(std.fullName());

// const cardRoot = document.getElementById("cardRoot")

// function Std (name , city , email) {
// this.name = name;
// this.city = city;
// this.email = email;

// }

// const students = [
//     new Std("Mustafa", "Karachi", "mustafa@gmail.com".toLowerCase()) ,
//     new Std("Shafay", "Karachi", "shafay@gmail.com".toLowerCase()) ,
//     new Std("Ahmed", "Karachi", "Ahmed@gmail.com".toLowerCase()) ,
//     new Std("Ali", "Karachi", "Ali@gmail.com".toLowerCase()) ,
//     new Std("Mushtaba", "Karachi", "Mushtaba@gmail.com".toLowerCase()) ,
//     new Std("Umer", "Karachi", "Umer@gmail.com".toLowerCase()) ,
    
// ]

// students.forEach((obj)=>{
// console.log(obj);
// cardRoot.innerHTML += `
// <div style="border: 1px solid black; width: 80%; margin: 12px auto;">
//     <p>Name:${obj.name}</p>
//     <p>City:${obj.city}</p>
//     <p>Email:${obj.email}</p>
// </div>
// `
// })


// console.log(students);

// const openWindow = () => {
//     window.open("https://www.facebook.com/" , "fb window" , "width=500px , height=500px")
// }



