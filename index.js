function theBeatlesPlay(musicians, instruments){
  var whatTheyPlay = [];
  // Declare array

  for(let i = 0; i < musicians.length; i++){
    whatTheyPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  console.log(whatTheyPlay)
  return whatTheyPlay;
}

function johnLennonFacts(facts){
  let n = 0;
  while(n < facts.length){
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var loveArray = [];
  // Declare empty array

  do {
    loveArray.push("I love the Beatles!")
    n++
  } while (n < 15)

  return loveArray;
}
