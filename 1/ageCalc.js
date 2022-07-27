let name1 = prompt('1 - Enter the first name: ');
let age1 = prompt('1 - Enter the age: ');

let name2 = prompt('2 - Enter the first name: ');
let age2 = prompt('2 - Enter the age: ');

if(age1 >= age2){
    alert(`The older is ${name1} with ${age1} years \n\nThe younger is ${name2} with ${age2} years \n\nThe age difference between them is ${age1 - age2} years`)
} else{
    alert(`The older is ${name2} with ${age2} years \n\nThe younger is ${name1} with ${age1} years \n\nThe age difference between them is ${age2 - age1} years`)
}