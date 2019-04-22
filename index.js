// add solution here
function theBeatlesPlay(musicians, instruments){
  var stringArray =[];
  for (var i = 0; i < musicians.length; i++) {
    stringArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return stringArray;
}

function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++
  }
  return facts;
}

function iLoveTheBeatles(number){
  var loveArray = [];
  var i = 0;
  do {
    loveArray[i] = "I love the Beatles!";
    i += 1;
  } while (15 - number > i );
  return loveArray;
}
