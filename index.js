function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  } return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  var count = 0;
  while(arr.length < facts.length) {
    var str = `${facts[count]}!!!`;
    arr.push(str);
    count++;
  } return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  var i = 0;

  do {
    arr.push('I love the Beatles!');
    n++;
  } while(n < 15);
return arr;
}
