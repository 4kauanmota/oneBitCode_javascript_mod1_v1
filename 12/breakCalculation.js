let shipVelocity = Number(prompt('Enter the actual velocity of the ship'));

let speedPrinter = (shipVelocityF) => {
    if(shipVelocityF == 0)
        alert('The ship is sttoped, you can leave safe')
    else
        alert(`Decelerating, actual speed is ${shipVelocityF}`)
}

deceleration(shipVelocity, speedPrinter);

function deceleration(shipVelocityF, speedPrinterF){
    let decelerationVelocity = Number(prompt('Enter the speed at which you want to decelerate'))

    while(shipVelocityF > 0){
        if(shipVelocityF - decelerationVelocity < 0)
            shipVelocityF = 0;
        else
            shipVelocityF -= decelerationVelocity;

        speedPrinterF(shipVelocityF);
    }
}