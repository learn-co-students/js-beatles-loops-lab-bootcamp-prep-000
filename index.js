function theBeatlesPlay(musicians, instruments) {
  var tempArr = new Array();
  for (let i = 0; i < musicians.length; i++) {
    tempArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return tempArr;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var tempArr = new Array();
  do {
    tempArr.push('I love the Beatles!');
  } while(tempArr.length <= num && num < 15);

  return tempArr;
}
