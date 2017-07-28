function theBeatlesPlay(musicians, instruments){
  var musicArr = [];
  for(var i = 0; i < musicians.length; i++){
    musicArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return musicArr;
}


function johnLennonFacts(facts){
  var i = facts.length - 1;
  while (i >= 0) {
    facts[i] += "!!!";
    i--;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return arr;
}
