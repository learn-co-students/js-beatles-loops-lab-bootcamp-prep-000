//returns an array of strings containing what instruments each musician plays
function theBeatlesPlay(musicians, instruments) {
  var a = []
  for (var i=0; i<4; i++) {a[i] = (musicians[i] + " plays " + instruments[i])}
  return a
};
//returns an array of strings with exclamation points
function johnLennonFacts(facts) {
  var b = []
  let x = 0
  while (x < facts.length) {b.push(`${facts[x]}!!!`);
  x++}
  return b
};
//returns an array of 'I love the Beatles!' 15 - num
function iLoveTheBeatles(num) {
  var c = []
  var d = 0
  do {
    if (num < 15) {c[d] = "I love the Beatles!"}
    else {return "I love the Beatles!" }}
  while (d++ < (14-num))
  return c
};
