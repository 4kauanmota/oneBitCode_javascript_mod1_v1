let pilotName = 'Kauan', newName = '';

for(let i = 0; i < pilotName.length; i++){
    if(pilotName[i] == 'u')
        newName += 'w'
    else
        newName += pilotName[i];
}

console.log(newName)