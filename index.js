function theBeatlesPlay(musicians, instruments){
    var arr = [];
    for (var i=0; i<musicians.length; i++){
      arr.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return arr;
}

function johnLennonFacts(facts){
  var output = []
  var i = 0;
  while(facts[i]){
    output.push(`${facts[i]}!!!`)
    i++
  }
  return output;
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return array;
}
