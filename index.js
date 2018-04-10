function theBeatlesPlay(person, instrument){
 var player = [];
 for (var i = 0; i < person.length; i++){
   player.push(person[i] + " plays " + instrument[i]);
 }
 return player;
}

function johnLennonFacts(facts){
  var fixedFacts = [];
  var i = 0;
  while (i < facts.length) {
    fixedFacts.push(facts[i] + "!!!");
    i++
  }
  return fixedFacts;
}

function iLoveTheBeatles(number){
  var repeater = [];
  do {
    repeater.push("I love the Beatles!")
    number++
  }
  while (number < 15);
  return repeater;
}
