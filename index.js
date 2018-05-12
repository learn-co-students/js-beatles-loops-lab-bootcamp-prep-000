var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];




function theBeatlesPlay(players, instruments) {
  var playerArray = [];
  for(var i = 0; i < players.length; i++) {
    playerArray.push(players[i] + " plays " + instruments[i]);
  }
  return playerArray;
}


function johnLennonFacts(facts) {
    var newArray = [];
    var i = 0;
    while(i < facts.length) {
      newArray.push(facts[i] + "!!!");
      i++;
    }
    return newArray;
}



function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newArray;
}


