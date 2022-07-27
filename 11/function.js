function speedControl(shipVelocityF, shipNameF){
    let selectedOption;
    do{
        selectedOption = Number(prompt('Choose an option \n\n1. Speed up the ship in 5km/s \n2. Slow down the ship in 5km/s \n3. Print current data \n4. Exit of the program'));

        switch(selectedOption){
            case 1:
                shipVelocityF = speedUp(shipVelocityF);
                break
            case 2:
                shipVelocityF = speedDown(shipVelocityF);
                break
            case 3:
                shipNotes(shipNameF, shipVelocityF);
                break
            default:
                if(selectedOption == 4)
                    alert('Leaving...');
                else
                    alert('Error, you enter a invalid number, try again [VALID NUMBERS -> 1 2 3 4]');
        }
    } while(selectedOption != 4);
}


function accelerationConfirmation(shipNameF, shipVelocityF = 0){
    let confirmation = confirm('Wants to accelerate your ship?');

    if(confirmation === true)
        speedControl(shipVelocityF, shipNameF);
}


function speedUp(shipVelocityF){
    shipVelocityF += 5;
    return(shipVelocityF);
}


function speedDown(shipVelocityF){
    if(shipVelocityF - 5 < 0){
        alert('Error, the ship is already in minimum speed');
        return(0);
    }
    else{
        shipVelocityF -= 5;
        return(shipVelocityF);
    }
}


function shipNotes(shipNameF, shipVelocityF){
    alert(`Ship name: ${shipNameF} \nCurrent speed: ${shipVelocityF}km/s`);
}


let shipName = prompt('Enter the name of your ship:'), shipVelocity;
accelerationConfirmation(shipName);