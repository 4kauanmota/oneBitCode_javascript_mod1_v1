function addNewPhone(){
    let phoneForm = document.querySelector('form fieldset');
    let newPhone = phoneForm.children[0].cloneNode(true);
    let phonePosition = phoneForm.children.length + 1
    newPhone.querySelector('label').innerText = `Phone ${phonePosition}: `
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children);
};

function printAllPhones(){
    let message = '';

    let phones = document.querySelectorAll('input[name="phone"]');
    phones.forEach((element, index) =>{
        message += (`${index + 1}. ${element.value}\n`);
    });

    alert(message);
};