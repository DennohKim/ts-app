function filter (array: any[], predicate: Function){
    //predicate is a function that returns either true or false

    let result = [];

    for(let i= 0; i<array.length; i++){
        let item = array[i];

        //if true item will be added to array
        if(predicate(item)){
            result.push(item);
        }


    }
    return result;


}


let numbers = [1,3,4,5,6,3,8,9,10]

function greaterThanSeven (item: number){
    return item > 7
}

console.log(filter(numbers, greaterThanSeven));

let animals = ["cats", "dog", "pig", "fish", "rabbit"]

function filterCats(item: string){
    return item === "cats";
}

console.log(filter(animals, filterCats));