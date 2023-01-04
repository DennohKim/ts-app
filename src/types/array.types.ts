//let d = [1, 2, 3]; //Type inference
let d: number[] = [1, 2, 3];

//let g = ["a", "b", "c"];
 let g: Array<string>= ["a", "b", "c"];


//let h = ["a", "b", 4, 5]
let h: (string | number)[] = ["a", "b", 4, 5]

type AirplaneTwo = {
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


type Airplanes = AirplaneTwo[];

const airplanes : Airplanes = [
    {
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
    },
    {
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
    
    
]

