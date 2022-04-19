let userInput = prompt('Are you screaming, whispering, or neither?')
if (userInput == userInput.toUpperCase()){
    console.log('You are screaming!');
} else if(userInput == userInput.toLowerCase()){
    console.log('You are whispering.');
} else{
    console.log("You are speaking normal");
}