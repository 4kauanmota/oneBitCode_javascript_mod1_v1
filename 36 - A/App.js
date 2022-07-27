class App{
    constructor(){
        this.property = null;

    };

    start(){
        this.property = newPropertyCreation();
        this.addNewPropertyElement();
        this.cleanForm();
    };

    addNewPropertyElement(){
        let disponibilityElement = this.disponibilityElementShow(this.property.propertyDisponibility);

        let newPropertyContent = this.newPropertyContentShow();

        let removeButton = this.addNewRemoveButton();

        let contentContainer = document.createElement('div');
        contentContainer.appendChild(newPropertyContent);
        contentContainer.appendChild(removeButton);
        contentContainer.classList.add('content-container');

        let newPropertyContainer = document.createElement('div');
        newPropertyContainer.appendChild(disponibilityElement);
        newPropertyContainer.appendChild(contentContainer);
        newPropertyContainer.classList.add('new-property-container');
        this.borderColor(this.property.propertyDisponibility, newPropertyContainer);

        document.querySelector('section.properties-section').appendChild(newPropertyContainer);
    };

    newPropertyContentShow(){
        let newPropertyContent = document.createElement('p');
        newPropertyContent.innerText = `Type: ${this.property.propertyType} \nArea: ${this.property.propertyArea}m²`;
        newPropertyContent.classList.add('new-property-content');

        return newPropertyContent;
    }

    addNewRemoveButton(){
        let removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.setAttribute('onclick', 'app.removeElementFunction(this)');
        removeButton.innerText = 'Delete';

        return removeButton
    };

    removeElementFunction(element){
        let removed = element.parentNode.parentNode;
        document.querySelector('section.properties-section').removeChild(removed);
    };
    
    disponibilityElementShow(element){
        let disponibilityElement = document.createElement('p');
        disponibilityElement.classList.add('disponibility-element');

        if(element == true){
            disponibilityElement.innerText = 'AVAIBLE';
            disponibilityElement.classList.add('disponibility-element-avaible');
        }
        else{
            disponibilityElement.innerText = 'RENTED';
            disponibilityElement.classList.add('disponibility-element-rented');
        };

        return disponibilityElement;
    };

    borderColor(propertyDisponibilityF, newPropertyContainerF){
        propertyDisponibilityF == true ? newPropertyContainerF.style.borderColor = '#00ff00' : newPropertyContainerF.style.borderColor = '#ff0000';
    };

    cleanForm(){
        document.getElementById('property-area').value = '';
        document.getElementById('property-disponibility').checked = false;
    };
};