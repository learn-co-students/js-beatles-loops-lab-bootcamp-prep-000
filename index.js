const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay (musicians, instruments){
  var array = [];
  for(let i = 0; i < musicians.length; i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`);
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
  var facts2 = [];
  let i = 0;
  while(i < facts.length){
    facts2.push(`${facts[i]}!!!`)
    i++
  }
  return facts2;
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    (array.push("I love the Beatles!"))
     n++;
  } while(n<15);
  return array;
}