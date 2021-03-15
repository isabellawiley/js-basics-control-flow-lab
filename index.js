function scuberGreetingForFeet(num){
  // Write your code here!
  const ride = num;
  if (ride <= 400){
    return "This one is on me!";
  }
  else if(ride > 2000 && ride <= 2500){
    return "I will gladly take your thirty bucks.";
  }
  else if(ride > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(string){
  // Write your code here!
  const city = string;
  if (city == "NYC"){
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

function switchOnCharmFromTip(num){
  // Write your code here!
  const tip = num;
  if (tip == "generous"){
    return "Thank you so much."
  }
  else if(tip == "not as generous"){
    return "Thank you.";
  }
  else{
    return "Bye.";
  }
}