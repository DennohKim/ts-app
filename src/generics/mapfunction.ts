// type Map = {

// }

//declare map function
const map = <T, U>(array: T[], func: (item: T) => U) => {
    //Check if array is empty
    if(array.length === 0) {
      return array;
    }
  
    //create new array to collect new values
    let result = [];
  
    //Loop through each item and call the func
  
    for(let i=0; i < array.length; i++) {
      result[i] = func(array[i]);
    }
  
    //return new array
    return result;
  }
  
  let newNumbers = [1, 3, 4, 5, 6, 3, 8, 9, 10];
  
  //@ts-ignore  
  const converted = map(newNumbers, (num) => num.toString()); 
  
  console.log(converted);