class Gun{
    constructor(bulletsQuantity){
        this.totalBullets = bulletsQuantity;
        this.shootsLeft = bulletsQuantity;
    };

    shoot(){
        if(this.shootsLeft > 0){
            console.log('BANG');
            this.shootsLeft -= 1;
        }
        else
            throw new Error('The weapon doesnt have enough bullets left');
    };

    reload(){
        this.shootsLeft = this.totalBullets;
    };
};

let gun1 = new Gun(2);

try{
    gun1.shoot();
    gun1.shoot();
    gun1.shoot();
} catch(e){
    console.log(e.message);
    gun1.reload();
} finally{
    console.log('Show of balls');
}

gun1.shoot();