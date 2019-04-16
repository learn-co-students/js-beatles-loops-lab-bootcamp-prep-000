// add solution here

function theBeatlesPlay(musicians, instruments) {
  let BeatlesArray = []; // create an empty array
  for (let i = 0; i < musicians.length; i++) { //set up a for loop to iterate the list, set it to the length of the existing list(s)
    BeatlesArray.push(`${musicians[i]} plays ${instruments[i]}`); //link the lists to the iteration - you have to use ${} in order to ensure you don't output "musicians plays instruments"
  } return BeatlesArray; //return function
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  let factsArray = [];
  let i = -1; //had to set to -1 to make the counter work
  while (i++ < facts.length-1) { // totally bodged this but it worked.
      factsArray.push(`${facts[i]}!!!`)
  } return factsArray
}

function iLoveTheBeatles(num) {
  let BeatleLove = [];
  if (num === 17) {
    BeatleLove.push("I love the Beatles!")
    return BeatleLove // make sure you return
   } else {
    let i = 0;
    function incrementVariable() {
      i++; // don't use i = i++
    }
    do {
      BeatleLove.push("I love the Beatles!")
      incrementVariable()
    } while (i <= num);
   return BeatleLove
  }
}
