// add solution here
var arr = [];
var i;

function theBeatlesPlay(musicians,instruments){
  for(i=0;i < musicians.length;i++) {
    arr[i] = musicians[i] + " plays " + instruments[i]
  }
  return arr
}

function johnLennonFacts(facts){
  for (i=0;i<facts.length;i++){
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(n){
  var temp = []
  do {
    temp.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
  return temp
}
