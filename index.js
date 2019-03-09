function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  let counter = 0;
  while (counter < facts.length) {
    facts[counter] += '!!!';
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let array = [];
  
  do {
    array.push("I love the Beatles!");
    num += 1;
  } while (num < 15);
  return array;
}