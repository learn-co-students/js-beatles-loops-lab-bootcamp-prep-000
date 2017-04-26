function theBeatlesPlay(musicians, instruments){
  var myArr = [];
  for(var i = 0; i < musicians.length; i++){
    myArr[i] = musicians[i] + " plays " + instruments[i];
  }
  return myArr;
}

function johnLennonFacts(facts){
  var count = facts.length;
  var i = 0;
  while(count>0) {
    facts[i] = facts[i] + "!!!";
    count--;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var str = [];
  do {
    str = [...str, "I love the Beatles!"];
    n++;
  } 
  while(n < 15);
  return str;
}