function addInformations(){
    let homeNumber = document.getElementById('number-home');
    let neighborhood = document.getElementById('neighborhood');
    let city = document.getElementById('city');
    let homeArea = document.getElementById('home-area');
    
    let newContentRemoveButton = document.createElement('button');
    newContentRemoveButton.innerText = 'remove';
    newContentRemoveButton.type = 'button';
    newContentRemoveButton.setAttribute('onclick', 'removeFunction(this)');
    newContentRemoveButton.setAttribute('class', 'red-button');

    let newContentArea = document.createElement('div');
    newContentArea.innerText = `Number of the home: ${homeNumber.value} | Neighborhood name: ${neighborhood.value} | City: ${city.value} | Home area is: ${homeArea.value}m2`;
    newContentArea.setAttribute('class', 'informations-group');
    newContentArea.appendChild(newContentRemoveButton);

    document.getElementById('section').appendChild(newContentArea);
};

function removeFunction(element){
    let removed = element.parentNode;
    document.getElementById('section').removeChild(removed);
};
