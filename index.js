function theBeatlesPlay(musicians,instruments) {
  var mi =[];
  for (var i=0;i<musicians.length;i++) {
    mi[i] = musicians[i] + " plays " + instruments[i];
  }
  return mi;
}

function johnLennonFacts(facts) {
  var i=0;
  while (i<facts.length) {
    facts[i]+="!!!";
    i++
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var love=[];
  var i=0;
  do {
    love[i]="I love the Beatles!";
    num++;
    i++;
  }
  while (num<15)
  return love;

  }
