function theBeatlesPlay (m, i){
  var empty = new Array();
  for (var count=0; count<m.length; count++){
    empty[count]=m[count]+ " plays " +i[count];
  }
  return empty;
}

function johnLennonFacts (facts){
  var c = 0;
  while (c<facts.length){
    facts[c]=facts[c]+"!!!";
    c++;
  }
  return facts;
}

function iLoveTheBeatles (num){
  var e = new Array();
  do{
    e.push("I love the Beatles!")
    num ++;
  } while (num < 15);
  return e;
}
