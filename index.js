function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
  for (let i=0; i < musicians.length; i++) {
    playArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playArray;
}

function johnLennonFacts(lennonFacts) {
  var excitedFacts = [];
  var i = 0;
  while (i<lennonFacts.length) {
    excitedFacts.push(lennonFacts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(n) {
  var arrayOfLove = [];
  do {
    arrayOfLove.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return arrayOfLove;
}