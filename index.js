// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr[i] = (`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var counter = 0;
  var arr = [];
  while (counter < facts.length) {
    arr.push(`${facts[counter]}!!!`);
    counter++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return arr;
}