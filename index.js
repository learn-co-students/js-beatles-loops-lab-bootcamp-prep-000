// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [ "He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];
var array = [];

function theBeatlesPlay(musicians,instruments){
  for (var i = 0; i < 4; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var abc = [];
  let i = 0;
  while (i < facts.length){
     abc.push(`${facts[i]}!!!`)
     i++;
  }
  return abc
}

function iLoveTheBeatles(num){
  var array4 = [];
  do{
    array4.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return array4
}