// add solution here

function theBeatlesPlay(arrayPlayers, arrayInstruments) {
  const myArray = [];
  for (let i = 0; i < arrayPlayers.length; i++) {
    // console.log(arrayPlayers[i] + " plays " + arrayInstruments[i].toLowerCase());
    myArray.push(arrayPlayers[i] + " plays " + arrayInstruments[i]);
    // console.log(myArray);
  }
  
  return myArray;
}

function johnLennonFacts(arrayFacts) {
  // Create counter
  let counter = 0;
  // copy arrayFacts
  const johnFacts = arrayFacts.slice();
  // While Loop
  while(counter < arrayFacts.length){
    johnFacts[counter] = johnFacts[counter] + "!!!";
    counter += 1;

  }
  return johnFacts; 
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

// console.log(johnLennonFacts(facts));

// var counter = 0;
// function incrementCounter(counter){
//   console.log(counter);
//   counter = counter + 1;
//   return counter;
// }

function iLoveTheBeatles(num) {
  const iArray = [];
  do {
    num += 1;
    iArray.push("I love the Beatles!");
  } while(num < 15);
  
  return iArray;
}

// console.log(incrementCounter());

// console.log(iLoveTheBeatles(29).length);
