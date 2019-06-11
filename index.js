function theBeatlesPlay(musicians, instruments){
  var n= [];
  for(var i=0; i<musicians.length; i++){
    n.push(musicians[i]+ " plays " + instruments[i]);
  }
  return n;
}

function johnLennonFacts(facts){
  var i=0;
  var newfacts=[]
  while(i<facts.length)
  {
    newfacts.push(facts[i]+"!!!");
    i++;
  }
  return newfacts;
}

function iLoveTheBeatles(num){
  var n= [];
  do{
    n.push("I love the Beatles!");
    num++;
  }
  while(num<15);
return n;
}