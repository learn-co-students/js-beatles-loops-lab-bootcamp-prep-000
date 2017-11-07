function theBeatlesPlay(musicians, instruments){
  var arry = [];
  for (let i = 0; i < musicians.length; i++) {
    var adit = musicians[i] + " plays " + instruments[i]
    arry.push(adit);
  }
  return arry;
}

function johnLennonFacts(facts) {
  var i = 0;
  var ary = [];
  while (i < facts.length) {
    ary.push(facts[i] + "!!!");
    i++;
  }
  return ary;
}

function iLoveTheBeatles(number){
  var luv = [];
  do {
    luv.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return luv;
}
