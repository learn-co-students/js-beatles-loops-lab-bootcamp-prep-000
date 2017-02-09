var theBeatlesPlay = (musicians, instruments) => {
  var whoplayswhat = []
  for (let i=0; i < musicians.length; i++) {
    let s = `${musicians[i]} plays ${instruments[i]}`;
    whoplayswhat.push(s);
  }
  return whoplayswhat
}

var johnLennonFacts = (facts) => {
  var bangFacts = [];
  for (let i=0; i<facts.length; i++) {
    let s = facts[i] + "!!!"
    bangFacts.push(s)
  }
  return bangFacts;
}

var iLoveTheBeatles = (n) => {
  var beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return beatleLove;
}