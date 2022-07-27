let text = 'The quick brown fox jumps over the lazy dog', cont = 0;

letter = 'a';

while(cont < text.length){
    if('a'.toLowerCase() == text[cont].toLowerCase()){
        console.log(cont);
    }
    cont++;
}