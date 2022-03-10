'use strict';

let userName = prompt('Hey there. I know we\'ve met before, but remind me your name again?');

alert(`Ah, yes, ${userName}. Ok, let's see how well you know me. I have some questions for you; you can answer them with yes or no.`);

let answerOne = prompt('Do I have a cat-sized dog AND a dog-like cat?').toLowerCase();
if(answerOne === 'y' || answerOne === 'yes'){
  alert('Yep! Blanche and Pat the Cat. Funniest people I know.');
  //console.log(`${userName} is correct; I have a cat and a dog.`);
} else if(answerOne === 'n' || answerOne === 'no'){
  alert('I guess we haven\'t spent much time together, since I talk about them all the time.');
  //console.log(`${userName} is incorrect; I have a cat and a dog.`);
}

let answerTwo = prompt('Do I own a pair of crocs?').toLowerCase();
if(answerTwo === 'y' || answerTwo === 'yes'){
  alert('Correct, they are camo. Cool comfy camo crocs.');
  //console.log(`${userName} is correct; I do have crocs.`);
} else if(answerTwo === 'n' || answerTwo === 'no'){
  alert('Actually, I do.');
  //console.log(`${userName} is incorrect; I do have crocs.`);
}

let answerThree = prompt('Am I from Mississippi?').toLowerCase();
if(answerThree === 'y' || answerThree === 'yes'){
  alert('Wow, way off. I\'m from Alabama.');
  //console.log(`${userName} is incorrect; I am not from Mississippi.`);
} else if(answerThree === 'n' || answerThree === 'no'){
  alert('Duh! I\'m from Alabama, very different place.');
  //console.log(`${userName} is correct; I am not from Mississippi.`);
}

let answerFour = prompt('Am I a wine snob?').toLowerCase();
if(answerFour === 'y' || answerFour === 'yes'){
  alert('Yikes, wrong. I\'ll have whatever.');
  //console.log(`${userName} is incorrect; I'm not a wine snob.`);
} else if(answerFour === 'n' || answerFour === 'no'){
  alert('Correct! No-snob zone. But I have worked for a lot of winemakers.');
  //console.log(`${userName} is correct; I'm not a wine snob.`);
}

let answerFive = prompt('Am I super cool, brilliant and amazing?').toLowerCase();
if(answerFive === 'y' || answerFive === 'yes'){
  alert(`Aw that's so nice, ${userName}! Well, there\'s no right answer but you did choose correctly.`);
  //console.log(`${userName} is incorrect; I am super cool, brilliant and amazing.`);
} else if(answerFive === 'n' || answerFive === 'no'){
  alert(`That\'s fair. I won't take it personally, ${userName}.`);
  //console.log(`${userName} is incorrect; I am super cool, brilliant and amazing.`);
}

let answerSix = 5;
let maxRetry = 3;
for (let i = 0; i <= maxRetry; i++){
  let userGuessSix = prompt (`Ok, ${userName}, new question. How many states have I lived in? I'll give you 4 guesses.`);
  if (parseInt (userGuessSix) === answerSix){
    alert(`That's right, ${userName}! I've lived in 5 states. Good job, you.`);
    //console.log('user was correct');
    break;
  } else if(userGuessSix > answerSix){
    alert(`Not that many! You have ${maxRetry - i} tries left.`);
    //console.log('user was incorrect.');
  } else if(userGuessSix < answerSix){
    alert(`More than that! You have ${maxRetry - i} tries left.`);
    //console.log('user was incorrect.');
  }
  if(i === maxRetry){
    alert(`Oof, sorry ${userName}, you're bad at guessing. The answer is 5 states.`);
  }
}

let answerSeven = ['mangoes', 'pineapples', 'blueberries', 'cherries'];
maxRetry = 5;
for (let i = 0; i <= maxRetry; i++){
  let userGuessSeven = prompt(`Now, this next question has multiple correct answers, so you should get this, ${userName}! What is one of my favorite fruits? Make sure your each guess is in its plural form.`);
if(answerSeven[i] === userGuessSeven){
  alert('Correct!');
} else if(userGuessSeven !== answerSeven[i]){
  alert('Nope!');
  }
}

// while maxRetry < 4
// for loop
// if answer7[i] === userGuess7 -- then return Correct! 
// else return Wrong!
// // need to keep track of maxretry, so need to decrament maxretry. maxretry--