// const user = "Mustafa"
// console.log(user);

// const user = "Shafay"
// console.log(user);


// console.log(user);


// const user = "Mustafa"


// if(true){
// // alert("hi")
// const user = false
// }

// console.log(user);


// const cities = ["karachi" , "lahore" , "Multan" , "peshawar"]

// const [biryaniShar , SohanlHawaSher , ChapliKababSher] = cities
// console.log(biryaniShar , "biryaniShar");
// // console.log(PayaSher , "PayaSher");
// console.log(SohanHalwaSher , "SohanHalwaSher");
// console.log(ChapliKababSher , "ChapliKababSher");

// const 
// const fruits  = [`apple` , 'orange' , 'peach']
// const [apple , , peach] = fruits
// console.log(apple , "apple")
// console.log(orange , "orange")
// console.log(peach , "peach")
// console.log(cities);

// const age = 20;
// const user = {
//     name : "Mustafa",
//     age  : 16,
//     email : 'mustafa@gmail.com'
// }

// const {age : userAge , email , name} = user

// console.log(name , "name");
// console.log(userAge , "userAge");
// console.log(email , "email");

// const arr1 = [1 ,2,3]
// const arr2 = [4,5,6]
// const arr3 = [...arr1 , ...arr2]
// const arr3 = arr1.concat(arr2)
// console.log(arr3 , "arr3");

// let str =  "Mustafa"
// let str2 = str


// console.log(str , "str");
// str = "Shafay"
//     console.log(str , "str");

// console.log(str2 , "str2");

//     const std = {
//         name : 'Mustafa',
//         age : 16,
//         email : 'mustafa@gmail.com'
//     }

//     const course = {

//         courseName : 'Web Development',
//         duration : "1.5 years",
//     trainer : "sir jaffar",
// email : "help@smit.com",
//         ...std,
//     }
//     console.log(std , "std");
//     console.log(course , "course");


// function foo (fruit1 , fruit2 ,  ...rest) {
// console.log(rest);

// }

// foo("apple" , "orange" , "banana", 73 , 883 , 92 , 13)

// const obj1 = {
//     name : "Mustafa",
//     age : 16 , 
//     email : 'mustafa@gmail.com' ,
//     skills : {
//         html : 70 ,
//         css : 85 ,
//         js : {
//     es5 : 95,
//     es6 : 60
//         }
//     }
// }

// const obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.skills.html = 100
// obj2.skills.js.es5 = 100 
// obj2.skills.js.es6 = 80 
// obj2.skills.css = 50
// console.log(obj1);
// console.log(obj2);

// obj2.phoneNumber = 884373
// delete obj2.email

// obj2.skills.html = 20
// obj2.skills.js = 90

// console.log(obj1);
// console.log(obj2);

// const obj2 = obj1

// obj2.name = "Shafay"
// obj2.email = 'shafay@gmail.com'
// const obj3 = obj2

// obj3.age = 25
// delete obj2.email
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// const foo = name=> "Kese ho " + name   


// console.log(foo("Mustafa"))

// console.log(this);

// const  foo = () => {
//     console.log(this);

// }
// foo()

// const email = ["mustafa@gmail.com" , "shafay@gmail.com" , "ahmed@gmail.com" , "bilal@gmail.com"  , "mahad@gmail.com"]

// const findEmail = email.find((email , index)=>{
// console.log(email , index);
// if(email === "mahad@gmail.com"){
// return true
// }
// })

// console.log(findEmail);

// if(findEmail){
// alert("Email found successfully")
// }else{
//     alert("not found")
// }

// const arr = ["mustafa@gmail.com" , "shafay@gmail.com" , "ahmed@gmail.com" , "bilal@gmail.com"  , "mahad@gmail.com"]

// const findIndexofEmail =  arr.findIndex((email ,index)=>{
// console.log(email , index);
// if(email === "mahad@gmail.com"){
// return true
// }
// })
// console.log(findIndexofEmail);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const maping = arr.map((value , index)=>{
// console.log(value);
// if(value % 2 === 0){
// // return true
// }
// return true
// })

// console.log(maping);


// const arr = [1,2,3,4,5,6,7,8,9,10]
// const filtering = arr.filter((value , index)=>{
// if(value % 2 === 0){
// return true
// }

// })

// console.log(filtering);

// import myData from "./newapp.js"
// console.log(myData);

// import {  std as newStd , data} from "./newapp.js"

// console.log(newStd , data);

// fetch('https:://fakestoreapi.com/products')
// .then(res=>res.json())
// .then((data)=>{
// console.log(data);

// })
// .catch(error=>{
//     console.log(error);
    
// })

// console.log("Start");
// setInterval(()=>{
// // console.log("API");

// } , 2000)
// console.log("End");

const myPromise = new Promise((resolve , reject)=>{

    const APICall =  () => {
const APICall = fetch("htps://fakestoreapi.com/products") 
console.log(APICall);

    }
if(APICall){
resolve("Complete")

}else{
    reject("In Complete")
}
})



console.log(myPromise);
