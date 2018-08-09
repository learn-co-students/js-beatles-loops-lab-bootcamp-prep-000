// add solution here

function theBeatlesPlay(musician,instrument){
  var array = []
  for (let i = 0; i < musician.length; i++){
    array.push(musician[i] +" plays " + instrument[i])
  }
  return array
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  let i = 0
  var newFactsArray = []
  while (i < facts.length){
    newFactsArray.push(facts[i] + "!!!")
    i++
  }
  return newFactsArray
}

function iLoveTheBeatles(n){
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  }
  while (n < 15)
  return array
}