class Client{
    constructor(name, age, address){
        this.name = name,
        this.age = age,
        this.address = address
    };
};

class VipClient extends Client{
    constructor(name, age, address, promotions){
        super(name, age, address),
        this.promotions = promotions
    };
};

let client1 = new VipClient('Kauan', 18, 'My home', 8);
let client2 = new Client('Mota', 48, 'I dont know');

console.log(client1, client2);