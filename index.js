function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for(let i=0; i < musicians.length; i++) {
    list.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return list;
}

function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    console.log(facts[i])
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var i = num
  var arr = [];
  do {

    arr.push("I love the Beatles!")
    i++;
  } while(i < 15)
  return arr;
}
