let spaceShip = {
    velocity: 0,
    confirmation: true,

    accelerationControl: function(){
        while(this.confirmation == true){
            this.confirmation = confirm('Want to accelerate your spaceship?');
            if(this.confirmation == false){
                alert('You stopped to accelerate the spaceship');
                this.informations();
            }
            else{
                this.speedUp(Number(prompt('Enter the velocity ou want accelerate')));
                if(this.velocity > this.maxValocity){
                    alert(`The maximum allowed speed is ${this.maxValocity}, and the current speed is ${this.velocity} \n\nForced stop activated`);
                    this.informations();
                    break
                };
            };  
        };
    },

    speedUp: function(acceleration){
        this.velocity += acceleration
    },

    register: function(){
        this.name = prompt('Enter the name of the spaceship');
        this.type = prompt('Enter the type of the spaceship');
        this.maxValocity = prompt('Enter the max velocity of the spaceship');
    },

    informations: function(){
        alert(`INFORMATIONS \n\nName: ${this.name} \nType: ${this.type} \nMax velocity: ${this.maxValocity}\nActual velocity: ${this.velocity}`)
    }
};

spaceShip.register();
spaceShip.accelerationControl();