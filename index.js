// add solution here
function theBeatlesPlay(musicians,instruments) {
  var variable=[]
  var i
  for (i=0;i<musicians.length;i++) {
      variable.push(musicians[i]+' plays '+instruments[i])
  }
  return variable
}

function johnLennonFacts(facts) {
  var i=0
  while(i<facts.length) {
    facts[i]=facts[i]+'!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var variable=[]
  do {
    variable.push("I love the Beatles!")
    n++
  } while (n<15)
  return variable
}