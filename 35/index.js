function verifyEnableAndDisable(){
    let onOff = document.createElement('p');
    onOff.classList.add('alert');
    let onOffLocation = document.getElementById('nameInput');
    onOffLocation.appendChild(onOff);

    let pElement = document.querySelector('p.alert');
    pElement.style.display = 'inline-block';
    pElement.style.padding = '4px';
    pElement.style.margin = '0';

    let element = document.getElementById('onOff').value;
    if(element == 'disabled'){
        document.querySelector('input[id="name"]').disabled = true;
        pElement.innerText = 'OFF'
        pElement.style.backgroundColor = '#ff0000';
    }
    else{
        document.querySelector('input[id="name"]').disabled = false;
        pElement.innerText = 'ON'
        pElement.style.backgroundColor = '#00ff00';
    }
}