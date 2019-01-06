// Write your code in this file!

let feet = 199;
function scuberGreetingForFeet (feet) {
  if (feet <= 400){
    return `This one is on me!`;
  }
  
  else if (feet > 2000 && feet < 2500) {
    return `I will gladly take your thirty bucks.`;
  }
  
  else if (feet > 2500) {
    return `No can do.`;
  }
}

const city = 'NYC';
function ternaryCheckCity() {

  (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}