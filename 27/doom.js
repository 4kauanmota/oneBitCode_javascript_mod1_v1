function doom(){
    let element = document.getElementById('name');
    console.log(element);
    console.log(element.value);
    
    let phones = document.getElementsByName('phone');
    console.log(phones);
    console.log(phones[0].value);

    let query = document.querySelectorAll("div input[name='phone']");
    console.log(query[1].value);

    let tag = document.getElementsByTagName('label');
    console.log(tag);
};