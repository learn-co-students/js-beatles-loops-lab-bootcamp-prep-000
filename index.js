function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = []; 
  for (let i=0; i<musicians.length; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlay;
}

function johnLennonFacts(lennonFacts){
  var i = 0;
  var len = lennonFacts.length
  var addExclaim = [];
  while (i < len){
    addExclaim.push(`${lennonFacts[i]}!!!`);
    i++;
  }
  return addExclaim;
}

function iLoveTheBeatles(number){
  var shoutOut = [];
  do {
    shoutOut.push("I love the Beatles!");
    number++
  } while (number < 15);
  console.log(shoutOut);
  return shoutOut;
}

iLoveTheBeatles(7);





