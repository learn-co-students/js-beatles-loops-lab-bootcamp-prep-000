var theBeatlesPlay = (musicians, instruments) => {
  var Beatles = [];
  for (var b = 0; b < musicians.length; b++ ) {
    Beatles.push(`${musicians[b]} plays ${instruments[b]}`);
  }
  return Beatles
}

var johnLennonFacts = (facts) => {
  var Beatle = []
  var i=0
  while (i<facts.length) {
    i++;
    Beatle.push(`${facts[i]}!!!`);
  }
  return Beatle;
}

var iLoveTheBeatles = (number) => {
  var Beatles = []
  do {
    Beatles.push("I love the Beatles!");
    number++
  } while (number < 15);
  return Beatles;
}
