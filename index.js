function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  };
  return array
};
function johnLennonFacts(facts) {
  var array = []
  let i = 0
  while (i < facts.length) {
    var string = `${facts[i]}!!!`
    array.push(string);
    i++;
  };
  return array
};
function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array
}
