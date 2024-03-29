//Today's forecast in Kelvin
const kelvin = 0;

//Today's forecast in Celsius
let celsius = kelvin - 273;

//Today's forecast in Fahrenheit
let fahrenheit = Math.floor(9/5*celsius+32);

//Today's forecast in Newton 
let newton = Math.floor(celsius*(33/100));
//Testing if the calculations are correct
console.log ('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');
console.log ('The temperature is ' + newton + ' degrees Newton.');