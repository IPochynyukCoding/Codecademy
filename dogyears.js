//My current age as of today
const myAge = 18;
//Early years
let earlyYears=2;
earlyYears *=10.5;
//Make the late
let laterYears = myAge - 2;
laterYears*=4;
console.log(earlyYears);
console.log(laterYears);

//My age in Dog Years
let myAgeInDogYears = earlyYears + laterYears;

const myName = 'Ivan'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years`);