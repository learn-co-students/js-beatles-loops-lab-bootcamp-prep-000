function theBeatlesPlay(musicians, instruments) {
  var roles = []
  for(let i = 0; i < musicians.length; i++) {
    roles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return roles;
}

function johnLennonFacts(facts) {
  var n = 0
  var array = [];
  while(n < facts.length) {
    array.push(`${facts[n]}` + "!!!");
    n++;
  }
  return array;
 }

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
  } while (n++ +1 < 15);
  return array;
}
