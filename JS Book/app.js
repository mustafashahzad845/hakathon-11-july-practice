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

const number = [1, 2, 3, 4, 5, 6]
console.log(number, "original");

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

const str = "my name is Mustafa"
const newArr =  str.split(" ")
const arr = []
console.log(newArr , "newArr"); 


const capitializeCase =  () => {
for (let i = 0; i < str.length; i++) {
    // console.log(str.slice(i, i + 2));
if(str.slice(i, i + 2) === "  "){
alert("Double Space not allow")
return
}

for(words of newArr){
console.log(words.slice(0 , 1).toUpperCase() + words.slice(1).toLowerCase() , "hi")
const newWord = words.slice(0 , 1).toUpperCase() + words.slice(1).toLowerCase() 
arr.push(newWord)
}


}
}

console.log(arr);

const capitializeWord = arr.join(" ");
document.write(capitializeWord)

