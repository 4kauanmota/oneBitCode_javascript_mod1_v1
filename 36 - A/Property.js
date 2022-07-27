class Property{
    constructor(propertyTypeF, propertyAreaF, propertyDisponibilityF){
        this.propertyType = propertyTypeF,
        this.propertyArea = propertyAreaF,
        this.propertyDisponibility = propertyDisponibilityF
    };
};

function newPropertyCreation(){
    event.preventDefault();

    let propertyType = document.getElementById('property-type').value;
    let propertyArea = document.getElementById('property-area').value;
    let propertyDisponibility = document.querySelector('input[name="property-disponibility-radio"]').checked;

    let newProperty = new Property(propertyType, propertyArea, propertyDisponibility);
    return newProperty;
};