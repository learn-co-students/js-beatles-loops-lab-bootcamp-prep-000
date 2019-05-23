// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians, instruments) {
  var music = [];
  for (let i = 0; i < 4; i++) {
      music.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return music;
}
JLfacts = [
  "H was the last Beatle to learn to Drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  function johnLennonFacts(JLfacts){
    var FACTS = []
    var i = 0 
    while (i < JLfacts.length){
      FACTS.push(JLfacts[i] + "!!!")
      i ++;
    }
    return FACTS
  }

function iLoveTheBeatles(n) {
  var array = [];
  do {
    n = array.push("I love the Beatles!");
    n++;
  } while (n < 15); {
    
  }
  return array;
}