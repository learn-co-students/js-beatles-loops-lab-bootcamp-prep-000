// add solution here
function theBeatlesPlay(musicians, instruments) {
  var tmp = [];
  for (let i = 0; i < musicians.length; i++) {
    tmp[i] = musicians[i] + " plays " + instruments[i];
  }
  return tmp;
}
function johnLennonFacts(facts) {
  var tmp = [];
  let i = 0;
  while(i < facts.length) {
    tmp[i] = facts[i++] +"!!!";
  }
  return tmp;
}
function iLoveTheBeatles(num) {
  var tmp = [];

  let i = num > 15 ? 15 : (15 - num);
  do {
    if (num > 15) {
      tmp.push("I love the Beatles!");
      return tmp;
    } else {
      tmp.push("I love the Beatles!");
    }
  } while (i++ < 15);
  return tmp;
}