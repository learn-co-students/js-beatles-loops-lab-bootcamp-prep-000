function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts){
  var i = facts.length;
  var newArray = [];
  while (i--) {
    newArray.unshift(`${facts[i]}!!!`);
  }
  return newArray
}

function iLoveTheBeatles(x){
  var newNewArray = [];
  do {
    newNewArray.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return newNewArray;
  }
