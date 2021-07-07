// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat= []
  var n = musicians.length
  for (let i = 0; i < n; i+=1) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var theFacts = []
  var n = facts.length
  while (n > 0) {
    theFacts.unshift(`${facts[n-=1]}!!!`)
  }
  return theFacts
}

function iLoveTheBeatles(num) {
  function incrementNum() {
    num+=1
    return num
  }
  var shoutOut = []
  do {
   shoutOut.push(`I love the Beatles!`)
  }
  while (incrementNum() < 15);
  return shoutOut
}