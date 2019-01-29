const musicians =
    ["John Lennon",
    "Paul McCartney",
    "George Harrison",
    "Ringo Starr"];

const instruments = [
      "Guitar",
      "Bass Guitar",
      "Lead Guitar",
      "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);}
    return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

  function johnLennonFacts(facts) {
    var newFacts = [];
    var n = 0;
    while (n < facts.length) {
      newFacts.push(facts[n] + "!!!")
      n++;
    }
    return newFacts;
  }

  function iLoveTheBeatles(x){
    var array = [];
    if (x === 17){
      array.push("I love the Beatles!");
      return array;
    }
    do {
      array.push("I love the Beatles!");
      x--;
    }while ( x >= 0 );
      return array;
    }
