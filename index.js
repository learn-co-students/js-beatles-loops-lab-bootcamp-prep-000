// add solution here


function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i=0, m=musicians.length; i<m; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const factArray = []
  var i=0;
  while (facts.length > i) {
    factArray.push(`${facts[i]}!!!`)
    i++
  }
  return factArray;
}

function iLoveTheBeatles(n) {
  const newArray = []
  
  do {
   newArray.push("I love the Beatles!")
   n++
  } while (n<15);
  return newArray
}
