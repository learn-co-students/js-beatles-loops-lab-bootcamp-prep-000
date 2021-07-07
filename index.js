// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  let i = 0;
  for (i=0; i<musicians.length; i++) {
    whoPlaysWhat[i] = musicians[i] + " plays " + instruments[i];
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  var factsWithExclamationPoints = [];
  let j = 0;
  while (j<facts.length) {
    factsWithExclamationPoints[j] = facts[j] + "!!!";
    j++;
  }
  return factsWithExclamationPoints;
}

function iLoveTheBeatles(number) {
  var howMuchLove = [];
  let k=0;
  if (number > 15) {
    howMuchLove = "I love the Beatles!"
    return howMuchLove;
  }
  else do { howMuchLove = howMuchLove.concat("I love the Beatles!"); k = k + 1 } while (k<=number);
  return howMuchLove;
}


