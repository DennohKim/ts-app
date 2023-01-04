type Airplane = {
    flightNumber: string;
    airplaneModel: string;
    dateOfDeparture: string;
    timeOfDeparture: string;
    from: string;
    to: string;
    seats: {
        //index signature. Only one index signature can exist in an object
        [key: string]: string;

        //can also be union type
       // [key: string | number]: string | number;

    }

};

const airplane: Airplane = {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateOfDeparture: "01/12/2022",
    timeOfDeparture: "23:10",
    from: "JFK",
    to: "DCA",
    seats: {
        "10A": "Mark Thomas",
        "10B": "John Jacobs",
       
        
    }
}

