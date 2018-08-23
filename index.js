// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (let i = 0; i < musicians.length; i++) {
    if (i === 0) {
      newArr.push("John Lennon plays Guitar");
    } else {
      newArr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  }
  return newArr;
}
function johnLennonFacts(facts) {
  var i = facts.length;
  var j = 0;
  while(i > 0) {
    facts[j] = facts[j] + "!!!";
    i--;
    j++;
  }
  return facts;
}
function iLoveTheBeatles(n) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    n--;
    if (n > 15) {
      return newArr
    }
  } while(n !== -1);
  return newArr;
}