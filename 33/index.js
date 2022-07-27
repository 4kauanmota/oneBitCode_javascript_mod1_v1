function printInformations(){
    event.preventDefault();

    let name = document.querySelector('input[name="name"]').value;
    let programmingLanguage = document.querySelector('select[name="programming-lang"]').value;

    alert(`Name: ${name} \nProgramming Language: ${programmingLanguage}`);
}