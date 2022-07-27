function setBlueBackground(){
    document.querySelector('p.modifiedText').style.backgroundColor = '#0000ff';
}

function removeBackground(){
    document.querySelector('p.modifiedText').style.backgroundColor = 'transparent';
}

function setRedFont(){
    document.querySelector('p.modifiedText').classList.add('red-text');
}

function removeRedFont(){
    document.querySelector('p.modifiedText').classList.remove('red-text');
}