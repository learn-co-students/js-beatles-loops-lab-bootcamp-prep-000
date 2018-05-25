function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i in musicians) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return strings;
}

function johnLennonFacts(arr) {
  var facts = [];
  for (var i in arr) {
    facts.push(arr[i] + "!!!");
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var timesILoveYou = [];
  do {
    timesILoveYou.push("I love the Beatles!");
    ++n;
  } while (n < 15);
  return timesILoveYou;
}