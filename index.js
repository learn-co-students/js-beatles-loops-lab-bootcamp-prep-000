function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    var string = `${musicians[i]} plays ${instruments[i]}`;
    newArray.push(string);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
