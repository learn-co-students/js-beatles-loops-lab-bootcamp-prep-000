function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {

      var i = 0;

      while(i < facts.length) {
        facts[i] += '!!!';
        i++;
      }
      return facts;
}

function iLoveTheBeatles(par) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    par++;
  } while(par < 15);
  return array;
}
