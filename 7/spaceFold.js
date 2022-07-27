let choose = true, cont = 0;

let shipName = prompt('Enter your ship name: ');

while(choose !== false){
    choose = confirm('Want to realize the next space fold?');
        if(choose === true)
            cont++;
};

alert(`With your ship ${shipName} you gave ${cont} space fold(s)`);

