let pilotName = prompt('Enter your name here: ');

let shipVelocity = 0;

let newVelocity = prompt('Enter how fast you want to travel (in km/h):');

confirm('Are you sure of that speed?') ? shipVelocity = newVelocity : shipVelocity = 0;

if(shipVelocity === 0){
    alert('The ship is stopped');
} else if(shipVelocity < 40){
    alert('The ship is slow, we can go faster');
} else if(shipVelocity < 80){
    alert('A good speed to stay');
} else if(shipVelocity < 100){
    alert('High speed, consider slowing down');
} else{
    alert("Dangerous speed, forced control activated");
}

alert(`Your name is ${pilotName} \n\nVelocity: ${shipVelocity} km/h`);