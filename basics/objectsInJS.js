const mySym = Symbol("tt")

const firstObj = {
    firstName: "Johny",
    [mySym]: "pp"

}

// console.log(firstObj["firstName"])
// console.log(typeof firstObj[mySym])

firstObj.greeting = function(){
    console.log("hey!")
}

// firstObj.greeting()

firstObj.oneMoreObj = {
    cartoon1: "Bandbudh Or Budhbak",
    cartoon2: "Chota Bheem" 
}

// console.log(firstObj.oneMoreObj?.cartoon2)


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = Object.assign({}, obj1, obj2)
obj3[5] = 'e'
// console.log(obj3[4])

const newObj = {
    myName: "Popu",
    myMotherName: "Popi",
    myFatherName: "Popa"

}

console.log(newObj.myName)
const {myName} = newObj
console.log(myName)

const navbar = ({company}) => {
     console.log(company)
}
navbar({company: "hitesh"})

