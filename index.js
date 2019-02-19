// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for(let i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`
    empty.push(str)
  }
  return empty; 
}

function johnLennonFacts(facts) {
  var empty = []
  let i = 0;
  while(i < facts.length) {
    var str = `${facts[i]}!!!`;
    empty.push(str);
    i++;
  }
  
  return empty;
}

function iLoveTheBeatles(number) {
  var empty = []
  do {
    empty.push(`I love the Beatles!`)
    number++;
  }
  while(number < 15)
  return empty;
}