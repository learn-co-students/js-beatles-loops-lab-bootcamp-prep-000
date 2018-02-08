const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];




function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  for (var i=0; i<musicians.length; i++) {

    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return emptyArray
}




function johnLennonFacts(facts) {
  var i=0;
  var excitedFacts = [];
  while (i < facts.length) {

    excitedFacts.push(`${facts[i]}` + '!!!');
    i++;

  }
  return excitedFacts
}





function iLoveTheBeatles (x) {
  var y = [];
  var i = 0;
  var loopCounter = 1

do {

y.push("I love the Beatles!")

i++;
loopCounter = loopCounter + 1
}


while (i<x+1 & loopCounter <=15)

//need to limit to 15
//need to only display one string if >17
if (x >= 17 ){
  return "I love the Beatles!"
}
  else return y
}
