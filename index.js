function theBeatlesPlay(musicians, instruments) {
  var results = [];
  for ( let i = 0; i < 4; i++ ) {
    results.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return results;
}

function johnLennonFacts(facts) {
  facts.forEach(function(item, index, array) {
    array[index] += '!!!';
  });
  return facts;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    ++num;
  } while (num < 15);
  return loveArray;
}