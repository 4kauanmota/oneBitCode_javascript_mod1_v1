let spaceShipName = prompt('Enter your space ship name:'), removedChar = prompt('Which character you want to replace: '), addedChar = prompt('Which character you want to put in place'), newSpaceShipName = '';

for(let i = 0; i < spaceShipName.length; i++){
    if(spaceShipName[i] == removedChar)
        newSpaceShipName += addedChar
    else
        newSpaceShipName += spaceShipName[i]
}

alert(`The old space ship name was ${spaceShipName}, and his new name is ${newSpaceShipName}`)