function theBeatlesPlay(musicians, instruments) {
  var firstArray = [];
  for (let i = 0; i < musicians.length; i++) {
    if (i === 0) {
    firstArray.push(`${musicians[0]} plays ${instruments[0]}`);
    } else {
      firstArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  } 
  return firstArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var secondArray = [];
  while (i < facts.length) {
    secondArray.push(`${facts[i]}!!!`);
    i ++;
  }
  return secondArray;
}

function iLoveTheBeatles(number) {
  var thirdArray = [];
  do { 
    thirdArray.push('I love the Beatles!');
    number ++;
  } while (number < 15);
return thirdArray;
}