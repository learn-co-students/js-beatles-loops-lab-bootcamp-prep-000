function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++){
    emptyArray.push (musicians[i] + ' plays ' + instruments[i])
  }
    return emptyArray;
}

function johnLennonFacts(facts){
  var emptyArray = [];
  var i = 0;
    while (i < facts.length) {
      emptyArray.push (facts[i] + '!!!');
      i++;
    }
  return emptyArray;
}

function iLoveTheBeatles(n){
  var emptyArray = [];
  var i = 0;
    do {
      emptyArray.push ("I love the Beatles!");
      i++;
    } while (n < 15 && i <= n);
    return emptyArray;
}
