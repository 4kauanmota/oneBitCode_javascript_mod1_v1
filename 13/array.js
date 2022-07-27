let array = ['Kauan', 'Soares', 'Mota', '4thend'];
console.log(array);

array.shift();
console.log(array);

array.unshift('Kakau');
console.log(array);

array.pop();
console.log(array);

array.push('Athend');
console.log(array);

console.log(array.indexOf('Soares'));

array.splice(0, array.length, 'Kauan', 'Soares', 'Mota', '4thend');
console.log(array);

console.log(array.slice(0, 3));

array.forEach(function(element, index){
    console.log(`${element}  Index: ${index}`);
});

let upcasedArray = array.map(element =>{
    let upcased = element.toUpperCase();
    return upcased;
});
console.log(upcasedArray);

console.log(array.filter(element =>{return element.length > 4}));

console.log(array.find(element =>{return element.length > 4}));

let marka = (n1, n2, n3) =>{
    return(n1 + n2 + n3);
};
console.log(marka(1, 2, 3));