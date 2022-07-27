class App{
    constructor(){
        this.spaceship = null;
    }

    start(){
        this.spaceshipCreation();
        this.menu();
    }

    spaceshipCreation(){;
        let spaceshipName = prompt('Enter the spaceship name');
        let spaceshipCrewQuantity = prompt('Enter the crew quantity of the spaceship');
        let choose = this.spaceshipType();
    
        if(choose == 1){
            let spaceshipAvaibleWeapons = prompt('Enter the avaible weapons in the spaceship')
            this.spaceship = new Battlespaceship(spaceshipName, spaceshipCrewQuantity, spaceshipAvaibleWeapons);
        }
        else{
            let spaceshipNumberOfSeats = prompt('Enter the avaible number of seats on the spaceship');
            this.spaceship = new Transportspaceship(spaceshipName, spaceshipCrewQuantity, spaceshipNumberOfSeats);
        };
    };
    
    spaceshipType(){
        let choose;

        while(![1, 2].includes(choose)){
            choose = Number(prompt('Enter the type of this spaceship \n\n1. Battle spaceship\n2. Transport spaceship'));
        };
    
        return(choose);
    };
    
    menu(){
        let choose;

        while(choose != 3){
            choose = this.menuSelectedOption();
            switch(choose){
                case 1:
                    let spaceShipAcceleration = prompt('Enter the velocity you want to accelerate the spaceship');
                    this.spaceship.speedUp = spaceShipAcceleration;
                    break;
                case 2:
                    this.spaceshipCreation();
                    break;
                case 3:
                    this.spaceshipPrinter();
                    break;
                default:
                    alert('ERROR, enter a valid option');
                    break;
            };
        };
    };
    
    menuSelectedOption(){
        let choose;
        while(![1, 2, 3].includes(choose)){
            choose = Number(prompt('Select an option \n\n1. Speed up the spaceship \n2. Change the spaceship \n3. Print and exit'));
        };
    
        return(choose);
    };
    
    spaceshipPrinter(){
        alert(`Name: ${this.spaceship.spaceshipName}\nCrew quantity: ${this.spaceship.spaceshipCrewQuantity} \nActual velocity: ${this.spaceship.velocity}`);
    };
    
}