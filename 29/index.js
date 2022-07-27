function addNewNumber(){
    let text = document.querySelector('div.numbers');
    let newText = text.children[0].cloneNode(true);
    let textPosition = text.children.length + 1;
    text.querySelector('h1').innerText = `,${textPosition}`;
    text.appendChild(newText);
}