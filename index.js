function theBeatlesPlay(musicians, instruments){
  var newArray=[];
  var i=musicians.length-1
  for(i; i>=0; i--){
    newArray.unshift(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts){
  var newArray=[];
  var i = facts.length;
  while(i>0){
    i--;
    newArray.unshift(facts[i]+ "!!!");
  }return newArray;
}

function iLoveTheBeatles(num){
  var newArray=[];
  do {newArray.unshift("I love the Beatles!");
    num++;
  
  } while (num<15); return newArray
}
