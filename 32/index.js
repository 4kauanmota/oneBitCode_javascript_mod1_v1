function getInformations(){
    let name = document.querySelector('input[name="name"]').value;
    let primaryColor = document.querySelector('select[name="color"] option:checked').text;
    let likeProgramming = document.querySelector('input[name="like-programming"]:checked').value;
    let skills = document.querySelectorAll('input[name="developer-options"]:checked');

    // let skillsList = [];
    // skills.forEach(element =>{
    //     if(element == skills[skills.length - 1])
    //         skillsList += `${element.value}`;
    //     else
    //         skillsList += `${element.value}, `;
    // });

    let skillsList = [];
    skills.forEach(element =>{skillsList.push(element.value)});
    
    alert(`${name} | ${primaryColor} | ${likeProgramming} | ${skillsList.join(', ')}`);
}