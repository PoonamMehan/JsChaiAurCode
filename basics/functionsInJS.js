const firstWay = function(){
    console.log("First way to declare a function")
}

function secondWay(){
    console.log("Second way to initialize a function.")
}

const thirdWay = () => {
    console.log("Third way to initalize a function. It is an arrow function.")
}

const fourthWay = () => console.log("This time without using the return keyword. It is an arrow function which is returning this string.")

// (function fifthWay(){
//     console.log("It is fifth way to write a function and it is an IIFE")
// })();

// //console.log("Does any code except another IIFE runs after an IIFE which is not ending with a semicolon.")

// (()=>{
//     console.log("This is an IIFE and sixth way to write a function. It is an arrow IIFE")
// })

// console.log(fourthWay())

