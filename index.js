function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array 
}

function johnLennonFacts(facts) {
  let i = facts.length
  while (i > 0) {
    console.log(--i)
    facts[i]=facts[i]+"!!!";
  }
  return facts
}

function iLoveTheBeatles(i) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    i++
  } while (i < 15);
  return array
}