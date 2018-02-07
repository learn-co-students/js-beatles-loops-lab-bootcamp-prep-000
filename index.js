function theBeatlesPlay (musicians, instruments) {
  var playArr = [];
  for (var i = 0; i < musicians.length; i++) {
     playArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playArr;
}

function johnLennonFacts (facts) {
  var arrOfFacts = [];
  var i = 0;
  while (i < facts.length) {
    arrOfFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return arrOfFacts;
}

function iLoveTheBeatles(num) {
  var beatlesArr = [];
  do {
    beatlesArr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return beatlesArr;
}