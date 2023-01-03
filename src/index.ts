// type array
const sequence:number[] = [45, 4, 9, 16, 25]

sequence.forEach((number) => {
    console.log(number)
})

let user:{} ={
    name: "John",
    age: 30,

};

//Typescript wont compile
// user.forEach((prop) => {
//     console.log(prop)
// })