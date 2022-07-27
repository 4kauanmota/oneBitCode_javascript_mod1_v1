const hitchedSpaceships = [
    ['Fenix', 8 , true],
    ['Golias', 10 , true],
    ['Helmet', 5 , false],
    ['Elemental', 3 , true],
    ['Darwin', 15 , false]
];

let over9CrewMembers = hitchedSpaceships.filter((element) =>{return element[1] > 9}).map(element =>{return(element[0])});

let unreadyShip = hitchedSpaceships.findIndex(element =>{return(element[2] == false)});

let upcasedArray = hitchedSpaceships.map(element => {return(element[0].toUpperCase())});

alert(`The space ships with more than 9 members are ${over9CrewMembers.join(' | ')} \n\nThe first unready space ship in the list is ${unreadyShip} \n\nThe name of the space ships in upcased are ${upcasedArray.join(', ')}`);