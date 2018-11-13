// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for (let i = 0; i < 4; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return beatles;
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var array = []
  let i = 0;

  while (i < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array
}

function iLoveTheBeatles(i){
  var array = [];

  function incrementVariable(){
    i++;
  }

  do {
    array.push("I love the Beatles!")
    incrementVariable()
  }

  while (i < 15)

  return array
}
