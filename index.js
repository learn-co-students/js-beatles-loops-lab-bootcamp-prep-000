function theBeatlesPlay(names, instruments) {
  var output = []
  for (let i = 0; i < names.length; i ++) {
    output.push(`${names[i]} plays ${instruments[i]}`)
  }
  return output
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i ++) {
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}

function iLoveTheBeatles(num) {
  const array=[]
  do {
    array.push("I love the Beatles!")
    num ++
  } while (num < 15);
  return array
}
