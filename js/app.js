'use strict';
let userName;

function userNameQuestion(){
  userName = prompt('Hey there. I think we\'ve met before, but remind me your name again?');
  alert(`Ah, yes, ${userName}. Let's see how well you know me. I have some yes-or-no questions for you. Ready?`);
}
userNameQuestion();

function questionOne(){
  let answerOne = prompt('Do I have exactly one dog and one cat?').toLowerCase();
  if(answerOne === 'y' || answerOne === 'yes'){
    alert('Yep! Blanche and Pat the Cat. My best friends.');
    //console.log(`${userName} is correct; I have a cat and a dog.`);
  } else {
    alert('I guess we haven\'t spent much time together, since I talk about them all the time.');
    //console.log(`${userName} is incorrect; I have a cat and a dog.`);
  }
}
questionOne();

function questionTwo(){
  let answerTwo = prompt('Do I own a pair of crocs?').toLowerCase();
  if(answerTwo === 'y' || answerTwo === 'yes'){
    alert('Correct, they are camo. Cool comfy camo crocs.');
    //console.log(`${userName} is correct; I do have crocs.`);
  } else {
    alert('Actually, I do. They\'re camo, which may be why you\'ve never noticed them.');
    //console.log(`${userName} is incorrect; I do have crocs.`);
  }
}
questionTwo();

function questionThree(){
  let answerThree = prompt('Am I from Mississippi?').toLowerCase();
  if(answerThree === 'y' || answerThree === 'yes'){
    alert('Wow, way off. I\'m from Alabama.');
    //console.log(`${userName} is incorrect; I am not from Mississippi.`);
  } else {
    alert('Correct! I\'m from Alabama, very different place.');
    //console.log(`${userName} is correct; I am not from Mississippi.`);
  }
}
questionThree();

function questionFour(){
  let answerFour = prompt('Am I a wine snob?').toLowerCase();
  if(answerFour === 'y' || answerFour === 'yes'){
    alert('Yikes, wrong. I\'ll have whatever.');
    //console.log(`${userName} is incorrect; I'm not a wine snob.`);
  } else {
    alert('Correct! No-snob zone.');
    //console.log(`${userName} is correct; I'm not a wine snob.`);
  }
}
questionFour();

function questionFive(){
  let answerFive = prompt('Am I super cool, brilliant and amazing?').toLowerCase();
  if(answerFive === 'y' || answerFive === 'yes'){
    alert(`Aw that's so nice, ${userName}! Well, there's no right answer but you did choose correctly.`);
    //console.log(`${userName} is incorrect; I am super cool, brilliant and amazing.`);
  } else {
    alert(`That's fair. I won't take it personally, ${userName}.`);
    //console.log(`${userName} is incorrect; I am super cool, brilliant and amazing.`);
  }
}
questionFive();

function questionSix(){
  let answerSix = 36;
  let attempts = 3;
  for (let i = 0; i <= attempts; i++){
    let userGuessSix = prompt ('You know what I love? Oreos. Do you know how many oreos come in a pack?');
    if (parseInt (userGuessSix) === answerSix){
      alert('Woohoo, you got it! I\'ll eat one in your honor.');
      //console.log('user correctly guessed 36 oreos in a pack.');
      break;
    } else if(userGuessSix > answerSix){
      alert(`Not that many! You have ${attempts - i} tries remaining.`);
      //console.log('user was incorrect.');
    } else if(userGuessSix < answerSix){
      alert(`More than that! You have ${attempts - i} tries remaining.`);
      //console.log('user could not guess how many oreos were in a pack.');
    }
    if(i === attempts){
      alert(`Oof, sorry ${userName}, no oreos for you. The answer is 36!`);
    }
  }
}
questionSix();

function questionSeven(){
  let myFavFruit = ['mangoes', 'mango', 'pineapple', 'pineapples', 'blueberries', 'cherries'];
  let numberOfGuesses = 5;
  while(numberOfGuesses) {
    numberOfGuesses--;
    let userFruitGuess = prompt('Now can you guess one of my favorite fruits?').toLowerCase();
    let correct = false;
    let fruit = null;
    for (let i = 0; i < myFavFruit.length; i++){
      if(userFruitGuess === myFavFruit[i]){
        correct = true;
        numberOfGuesses = 0;
        fruit = myFavFruit[i];
      }
    }
    if (correct){
      alert(`Yum. I DO love ${fruit}!`);
    } else {
      alert(`Hmm, I'm not the biggest fan. Try again.`);
    }
  }
}
questionSeven();
