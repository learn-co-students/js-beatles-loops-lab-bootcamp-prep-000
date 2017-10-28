function theBeatlesPlay(musicians,instruments) {
  var credits=[];
  for(var i=0;i<musicians.length;i++) {
    credits.push(musicians[i] + " plays " + instruments[i]);
  }
  return credits;
}

function johnLennonFacts(facts) {
var i=0;
  while(i<facts.length) {
    facts[i]+="!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
var array=[];
var i=0;
  do{
      array.push("I love the Beatles!")
      i++;
  } while(i<=num && num<15)
return array;
}
