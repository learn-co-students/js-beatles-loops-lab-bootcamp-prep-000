// add solution here
function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

const funFacts = [ "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]

function johnLennonFacts(funFacts){
  var results = [];
  var count = 0;
  while (count < funFacts.length) {
  results.push(funFacts[count]+ "!!!"); 
  count++;}
  return results;
}


function iLoveTheBeatles(num){
  var results = [];
  do {
    results.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return results;
}
