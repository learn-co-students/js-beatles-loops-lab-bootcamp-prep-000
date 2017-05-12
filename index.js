function theBeatlesPlay(musicians, instruments){
  let emptyArray = new Array();
  for (var i = 0; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return emptyArray;
  }

function johnLennonFacts(facts){
  let emptyArray = new Array();
  var i = 0;
    while (i < facts.length) {
      emptyArray.push (`${facts[i]}!!!`);
      i++;
    }
  return emptyArray;
}

function iLoveTheBeatles(number){
  let emptyArray = new Array();
  var i = 0;
  do {
    emptyArray.push ("I love the Beatles!");
    i++;
  } while (number < 15 && i <= number);
  return emptyArray;
}
