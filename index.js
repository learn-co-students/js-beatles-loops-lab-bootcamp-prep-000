function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}


function johnLennonFacts(facts) {
  var count = 0;
  while (count < facts.length) {
    facts[count] = `${facts[count]}!!!`;
    count = count+1;
  }
  return facts;
}


function iLoveTheBeatles(number) {
  var count = 0;
  var array = [];
  do {
    array[count] = 'I love the Beatles!';
    count = count + 1;
    number = number + 1;
} while (number < 15);
return array
}