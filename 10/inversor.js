let spaceShipName = prompt('Enter your space ship name: '), newSpaceShipName = '';

let i = spaceShipName.length - 1;

// for(i; i >= 0; i--){
//     if(spaceShipName[i] == 'e')
//         break
//     else
//         newSpaceShipName += spaceShipName[i];
// }

while(i >= 0){
    if(spaceShipName[i] == 'e')
        break;
    else
        newSpaceShipName += spaceShipName[i];
    i--;
}

// do{
//     if(spaceShipName[i] == 'e')
//         break
//     else
//         newSpaceShipName += spaceShipName[i];
//     i--;
// }while(i >= 0);

alert(`Your space ship new name is: ${newSpaceShipName}`);