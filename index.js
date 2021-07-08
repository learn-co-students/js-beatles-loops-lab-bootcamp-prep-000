function theBeatlesPlay(musicians, instruments) {
  var list = [];
  
  for(var i = 0; i < musicians.length; i++) {
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return list;
}

function johnLennonFacts(facts) {
  var i = 0;
  
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var list = Array();
  var counter = number;
  
  do {
    list.push("I love the Beatles!");
    counter++;
  }
  while(counter < 15);
  
  return list;
}