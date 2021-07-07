// add solution here
function theBeatlesPlay(musicians, instruments) {
  var playArr = [];
  for (let i = 0; i < musicians.length; i++) {
    playArr[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return playArr;
}


function johnLennonFacts(factsArr) {
for (let i = 0; i < factsArr.length; i++) {
    factsArr[i] = factsArr[i] + "!!!";
  }
  return factsArr;
}


function iLoveTheBeatles(n) {
  var loveArr = [];
  do {
    loveArr.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return loveArr;
}

