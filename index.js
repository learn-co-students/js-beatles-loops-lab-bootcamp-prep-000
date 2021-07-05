var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(players, instruments) {
  var arr = [];
  for (var i = 0; i < players.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}


const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];


function johnLennonFacts(facts) {
  var facts2 = [];
  var i = 0;
  
  while (i < facts.length) {
    facts2.push(facts[i] + "!!!");
    i++;
  }
  return facts2;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15) {
    if (number === 17) {
      number === 1;
    }
  }
  return arr;
}










