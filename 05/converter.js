let lightYears = prompt('Enter the distance in light years:');

let option = Number(prompt('Convert with: \n\n1. Parsec(pc) \n2. Astronomic unit(AU) \n3. Kilometers(km)'))

switch(option){
    case 1:
        let pcCalc = lightYears * 0.306601;
        alert(`${lightYears} light years are equal to ${pcCalc}pc`);
        break;
    case 2:
        let auCalc = lightYears * 63241.1;
        alert(`${lightYears} light years are equal to ${auCalc} AU`);
        break;
    case 3:
        let kmCalc = lightYears * 9.5 * Math.pow(10, 12);
        alert(`${lightYears} light years are equal to ${kmCalc}km`)
        break;
    default:
        alert('ERROR, enter a valid value'); 
}