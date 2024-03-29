let username = "Ivan";

username ? console.log(`Hello ${username}!`) : console.log("Hello!");

const userQuestion = "Can you divide by 11?";

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = "Signs point to yes";
    break;
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
}
console.log(eightBall);
