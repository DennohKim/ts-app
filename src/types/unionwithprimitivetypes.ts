type stringOrNumber = number | string;


function addNumberOrString(a: stringOrNumber, b: stringOrNumber){
    if (typeof a === "number" && typeof b === "number") {
        return a + b

    } else {
        return a.toString() + b.toString();
    }
}

console.log(addNumberOrString(5, 10));
console.log(addNumberOrString("mark"));


