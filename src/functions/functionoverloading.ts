type Reservation = {
    departureDate: Date;
    returnDate?: Date; //optional property
    departingFrom: string;
    destination: string;
  };
  
  //function call signatures with multiple call signatures
  type Reserve = {
    (
      departureDate: Date,
      returnDate: Date,
      departingFrom: string,
      destination: string
    ): Reservation | never;
    (departureDate: Date, departingFrom: string, destination: string):
      | Reservation
      | never;
  };
  
  const reserve: Reserve = (
    departureDate: Date,
    returnDateOrDepartingFrom: Date | string,
    departingFromOrDestination: string,
    destination?: string
  ) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
      return {
        departureDate: departureDate,
        returnDate: returnDateOrDepartingFrom,
        departingFrom: departingFromOrDestination,
        destination: destination,
      };
    } else if (returnDateOrDepartingFrom === "string"){
      return {
          departureDate: departureDate,
          departingFrom: returnDateOrDepartingFrom,
          destination: departingFromOrDestination
  
  
      }
    } 
  
    throw new Error("Please provide valid details to reserve a ticket");
  
  };
  
  console.log(reserve(new Date(), new Date(), "Washington", "New York" ))
  