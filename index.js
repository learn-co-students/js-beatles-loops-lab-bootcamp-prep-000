function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var x = 0; x < musicians.length; x++){
    array.push(musicians[x] +" plays " + instruments[x]);
  }
  return array;
}

function johnLennonFacts(facts){
var x = 0;
while(x < facts.length){
  facts[x] = facts[x] + "!!!";
  x++;
}
return facts;
}

function iLoveTheBeatles(num){
   var emptyA = []
  do {
      emptyA.push("I love the Beatles!");
      num++
  }  while (num < 15);
return emptyA;
}
