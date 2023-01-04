//create using constructor method 

let bigInt1 = BigInt(945632);

//Using literal syntax
let bigInt2 = 12324343n

console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);


const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne)
console.log(safeIntPlusTwo)

let a: bigint = BigInt(1234543);

let b: bigint = 2345893n;

let c: bigint = a - b; 

// You cannot use bigint with decimal places. Must be inter

let e: bigint = 24549.43n

//Inbuilt math object do not work with bigint


let f = Math.log(a);





