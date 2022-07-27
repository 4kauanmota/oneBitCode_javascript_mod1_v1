let departureEntryDate = prompt('Enter your entry date DD/MM/YYYY');

let departureDate = moment(departureEntryDate, 'DD-MM-YYYY');

let today = moment();

let departureDateCalc = (today - departureDate);

let choice = prompt('You want see the time in \n\n1 - Seconds \n2 - Minutes \n3 - Hours \n4 - Days \n5 - Weeks \n6 - Months \n7 - Years');

if(choice == 1){
    let secondsCont = Math.floor(departureDateCalc / 1000);
    alert(`${secondsCont} seconds`)
} else if(choice == 2){
    let minutesCont = Math.floor(departureDateCalc / 1000 / 60);
    alert(`${minutesCont} minutes`)
} else if(choice == 3){
    let hoursCont = Math.floor(departureDateCalc / 1000 / 60 / 60);
    alert(`${hoursCont} hours`)
} else if(choice == 4){
    let daysCont = Math.floor(departureDateCalc / 1000 / 60 / 60 / 24);
    alert(`${daysCont} days`)
} else if(choice == 5){
    let weeksCont = Math.floor(departureDateCalc / 1000 / 60 / 60 / 24 / 7);
    alert(`${weeksCont} weeks`)
} else if(choice == 6){
    let monthsUntilNow = moment().format('MM')
    let monthsCont = Math.floor((departureDateCalc / 1000 / 60 / 60 / 24 / 365) * 12 + Number(monthsUntilNow));
    alert(`${monthsCont} months`)
} else if(choice == 7){
    let yearsCont = Math.floor(departureDateCalc / 1000 / 60 / 60 / 24 / 365);
    alert(`${yearsCont} years`)
} else{
    alert('ERROR, enter a valid value')
}