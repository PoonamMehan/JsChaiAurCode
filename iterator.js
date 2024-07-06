// for(let index=0; index <10 ; index++){
//     console.log(index);
// }

// const funcToTestConBreak = (num) => {
//     console.log(`One ${num}`)
//     console.log(`Two ${num}`)
//     if(num == 5){
//         break
//     }
//     console.log("Does break keyword work for a function?")
// }


// const obj = {
//     key1: "val1",
//     key2: "val2",
//     key3: "val3"
// }

// for (key in obj){
//     console.log(key, obj[key]);
// }

const iAmAMap = new Map()
iAmAMap.set('one', 1)
iAmAMap.set('two', 2)
iAmAMap.set('three', 3)
iAmAMap.set('four', 4)


for ([key, val] of iAmAMap){
    // console.log(key,"=>",val)
}


