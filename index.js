function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  var i;
  var mus = musicians.length;
  for (i = 0; i < mus; i++) {
  beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}
function johnLennonFacts(array) {
  let i = 0;
  var jl = [];
  var facts = array.length;
while (i < facts) {
  jl.push(array[i] + "!!!");
  i++;
}
 return jl;
}
function iLoveTheBeatles(n) {
  var love = [];
  do {
   love.push("I love the Beatles!");
   n++;
  }
  while (n < 15);
  return love
}