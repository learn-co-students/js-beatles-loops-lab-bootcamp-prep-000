function theBeatlesPlay (musicians, instruments) {
  var pairs = new Array()

  for (var i = 0; i < musicians.length; i++){
    pairs.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return pairs;
};

function johnLennonFacts (facts) {
  var excitedArray = [];
  var i = 0;

  while (i < facts.length){
    excitedArray.push(`${facts[i]}!!!`)
    i+=1
  }
  return excitedArray;
};

function iLoveTheBeatles (number) {
  var list = [];

  do {
    list.push("I love the Beatles!");
    number += 1;
  } while (number < 15);

  return list;
};
