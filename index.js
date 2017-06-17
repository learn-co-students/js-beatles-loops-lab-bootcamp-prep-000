function theBeatlesPlay(musicians, instruments) {
  var newArray = []
for (let i = 0; i < 4; i++ )
{newArray.push(`${musicians[i]} plays ${instruments[i]}`)}
return newArray}

function johnLennonFacts(facts) {var anotherNewArray = []
  var counter = 0
 while (counter < facts.length) {anotherNewArray.push (`${facts[counter]}!!!`); counter++}
return anotherNewArray}

function iLoveTheBeatles(n) {
  var newArrayThree = []
  do {newArrayThree.push("I love the Beatles!"); n++}
  while(n < 15)
 return newArrayThree}
