//Assign variables based on various conditions
let raceNumber = Math.floor(Math.random() * 1000);
let earlyAttend = false;
let runnerAge = 19;
//Create conditional statement based on above variables
if (runnerAge > 18 && earlyAttend) {
  console.log(
    `You will race at 9:30 AM. Your race number is ${raceNumber + 1000}.`
  );
} else if (runnerAge > 18) {
  console.log(`You will race at 11:00 AM. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 PM. Your race number is ${raceNumber}.`);
} else {
  console.log("Please go to the registration desk.");
}
