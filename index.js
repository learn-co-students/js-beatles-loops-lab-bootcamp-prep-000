// add solution here
function theBeatlesPlay(musicianArray, instrumentsArray){
  var allPlayers = [];
  
  for (let i = 0; i < musicianArray.length; i++){
    allPlayers.push(musicianArray[i] + " plays " + instrumentsArray[i]);
  }
  return allPlayers;
}

function johnLennonFacts(facts){
  var i = 0;
  var newFacts = [];
  
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  
  return newFacts;
  
}

function iLoveTheBeatles(num){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return newArray;
}