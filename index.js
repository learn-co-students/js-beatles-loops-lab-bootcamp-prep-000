function theBeatlesPlay(musicians, instruments){
  var a = [];
  for (let i=0; i<musicians.length; i++){
    var s = ""
    s = musicians[i] + " plays " + instruments[i];
    a.push(s);
  }
  return a;
}

function johnLennonFacts(facts){
  let i = 0; 
  while (i<facts.length){
    facts[i] = facts[i] + "!!!"
    i++; 
  }
  return facts;
}

function iLoveTheBeatles(n){
  var b = [];
  do{
    b.push("I love the Beatles!")
    n++
    }
  while(n<15);
  return b;
}