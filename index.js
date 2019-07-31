
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
    for (let i = 0; i < musicians.length; i++) {
      var string1 = musicians[i]
      var string2 = instruments[i]
      var string3 = string1 + " plays " + string2
      emptyArray.push(string3)
    }
    return emptyArray;
}

function johnLennonFacts(facts) {
  let p = 0;
  while (p < facts.length) {
    facts[p] = facts[p] + "!!!";
    p++;
  }
  return facts
}
function iLoveTheBeatles(num) {
  var emptyA = [];
    do {
      emptyA.push("I love the Beatles!")
      num++
    } while (num < 15)
  return emptyA;
}
