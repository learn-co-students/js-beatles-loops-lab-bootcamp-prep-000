function theBeatlesPlay(musicians,instruments) {
  var Beatles=[]
  for (var i=0; i < musicians.length; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  } return Beatles
}

function johnLennonFacts(facts) {
var i = 0;
var array = []
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  } return array
}

function iLoveTheBeatles(i) {
  var array = [];
do {
    array.unshift("I love the Beatles!");
    i++;
  } while (i < 15);
  return array
}
