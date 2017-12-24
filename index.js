function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (var i = 0; i<musicians.length; i++ ){
    var str = `${musicians[i]} plays ${instruments[i]}`;
    empty.push(str);
  }
  return empty;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i<=facts.length - 1){
    facts[i]= facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles (number){
  var newArray= [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newArray;
}