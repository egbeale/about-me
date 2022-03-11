'use strict';

function nameQuestion(){
  let userName = prompt('Hey there. I know we\'ve met before, but remind me your name again?');
  alert(`Ah, yes, ${userName}. Ok, let's see how well you know me. I have some questions for you; you can answer them with yes or no.`);
}

function animalQuestion(){
  let answerOne = prompt('Do I have a cat-sized dog AND a dog-like cat?').toLowerCase();
  if(answerOne === 'y' || answerOne === 'yes'){
    alert('Yep! Blanche and Pat the Cat. Funniest people I know.');
    //console.log(`${userName} is correct; I have a cat and a dog.`);
  } else if(answerOne === 'n' || answerOne === 'no'){
    alert('I guess we haven\'t spent much time together, since I talk about them all the time.');
    //console.log(`${userName} is incorrect; I have a cat and a dog.`);
  }
}
function crocsQuestion(){
  let answerTwo = prompt('Do I own a pair of crocs?').toLowerCase();
  if(answerTwo === 'y' || answerTwo === 'yes'){
    alert('Correct, they are camo. Cool comfy camo crocs.');
    //console.log(`${userName} is correct; I do have crocs.`);
  } else if(answerTwo === 'n' || answerTwo === 'no'){
    alert('Actually, I do.');
    //console.log(`${userName} is incorrect; I do have crocs.`);
  }
}
function stateQuestion(){
  let answerThree = prompt('Am I from Mississippi?').toLowerCase();
  if(answerThree === 'y' || answerThree === 'yes'){
    alert('Wow, way off. I\'m from Alabama.');
    //console.log(`${userName} is incorrect; I am not from Mississippi.`);
  } else if(answerThree === 'n' || answerThree === 'no'){
    alert('Duh! I\'m from Alabama, very different place.');
    //console.log(`${userName} is correct; I am not from Mississippi.`);
  }
}
function wineQuestion(){
  let answerFour = prompt('Am I a wine snob?').toLowerCase();
  if(answerFour === 'y' || answerFour === 'yes'){
    alert('Yikes, wrong. I\'ll have whatever.');
    //console.log(`${userName} is incorrect; I'm not a wine snob.`);
  } else if(answerFour === 'n' || answerFour === 'no'){
    alert('Correct! No-snob zone. But I have worked for a lot of winemakers.');
    //console.log(`${userName} is correct; I'm not a wine snob.`);
  }
}
function superCool(){
  let answerFive = prompt('Am I super cool, brilliant and amazing?').toLowerCase();
  if(answerFive === 'y' || answerFive === 'yes'){
    alert(`Aw that's so nice, ${userName}! Well, there's no right answer but you did choose correctly.`);
    //console.log(`${userName} is incorrect; I am super cool, brilliant and amazing.`);
  } else if(answerFive === 'n' || answerFive === 'no'){
    alert(`That's fair. I won't take it personally, ${userName}.`);
    //console.log(`${userName} is incorrect; I am super cool, brilliant and amazing.`);
  }
}

//UESTION 6 LOOP

// let answerSix = 5;
// let attempts = 4;

// while (attempts) {
//   let userGuess = prompt(`Ok, ${userName}, next question. How many states have I lived in? I'll give you 4 guesses.`);
//   if (userGuess > answerSix) {
//     alert('Nope, not that many.');
//   } else if (userGuess < answerSix) {
//     alert('Nope, more than that.');
//     break;
//   }
//   attempts--;
//   if (attempts === 0) {
//     alert(`Oof, not great at guessing, ${userName}. The answer is ${answerSix}.`);
//   }
// }

let answerSix = 5;
let maxRetry = 4;
function howMany(){
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
      alert(`Oof, sorry ${userName}, you're bad at guessing. The answer is 5.`);
    }
  }
}

//QUESTION 7 LOOP

function fruitQuestion(){
  let myFavFruit = ['mangoes', 'mango', 'pineapple', 'pineapples', 'blueberries', 'cherries'];
  let numberOfGuesses = 5;
  
  while(numberOfGuesses) { //slow loop
    numberOfGuesses--;
    let userFruitGuess = prompt('Ok, this question has multiple correct answers. I want you to guess my favorite fruits.').toLowerCase();
    let correct = false;
    let fruit = null;
    for (let i = 0; i < myFavFruit.length; i++){ //fast loop
      if(userFruitGuess === myFavFruit[i]){
        correct = true;
        numberOfGuesses = 0;
        fruit = myFavFruit[i];
      }
    }
    if (correct){
      alert(`Yum! I DO love ${fruit}!`);
    } else {
      alert('Sorry, nope');
    }
  }
}
nameQuestion();
animalQuestion();
crocsQuestion();
stateQuestion();
wineQuestion();
superCool();
howMany();
fruitQuestion();
