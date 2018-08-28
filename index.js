// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < musicians.length; i++){
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i += 1;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  }while(num < 15)
  return array;
}