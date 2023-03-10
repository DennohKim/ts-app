// type Filter = {
//     (array: number[], predicate: (item: number) => boolean): number[];
//     (array: string[], predicate: (item: string) => boolean): string[];
//     (array: object[], predicate: (item: object) => boolean): object[];
// };
//Using generics instead of function overload
const filter = (array, predicate)=>{
    //predicate is a function that returns either true or false
    let result = [];
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        //if true item will be added to array
        if (predicate(item)) result.push(item);
    }
    return result;
};
let numbers = [
    1,
    3,
    4,
    5,
    6,
    3,
    8,
    9,
    10
];
function greaterThanSeven(item) {
    return item > 7;
}
console.log(filter(numbers, greaterThanSeven));
let animals = [
    "cats",
    "dog",
    "pig",
    "fish",
    "rabbit"
];
function filterCats(item) {
    return item === "cats";
}
console.log(filter(animals, filterCats));

//# sourceMappingURL=index.377278e2.js.map
