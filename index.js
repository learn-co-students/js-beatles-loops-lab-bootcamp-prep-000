function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  var i = facts.length-1
  while (i >= 0) {
    facts[i] = `${facts[i]}!!!`
    --i;
  }
  return facts
}

/*OFFICIAL SOLUTION
function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}
*/

function iLoveTheBeatles(n) {
  var array = []
  do {
      array.push("I love the Beatles!")
      n++
    } while (n < 15);
  return array
}

/*function theBeatlesPlay(musicians, instruments) {
  var lineup = []
  for (let i = 0; i <= 3; i++) {
    lineup.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return lineup
}

function johnLennonFacts(facts) {
  var newArray = []
  let i = 0
  while (newArray.length < facts.length) {
    newArray.push(facts[i] + "!!!")
    i++
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!");
    n++
  } while (n < 15);
  return newArray
}
*/
