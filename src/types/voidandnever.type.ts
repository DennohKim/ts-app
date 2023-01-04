//void function is a function that does not return anything but can perform other procedure
//never function will not complete therefore terminates

const addNumbers = ():void => {
    console.log(2 + 4);

}
addNumbers();


const throwNewError = ():never => {
    throw new Error("Your program terminated because of error");
};

