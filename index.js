function theBeatlesPlay(musicians, instruments) {
  var array = new Array();

  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}

function johnLennonFacts(facts) {
  var c = 0;
  while (c<facts.length) {
    facts[c] = facts[c] + "!!!";
    c++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = new Array();

  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  
  return array;
}
