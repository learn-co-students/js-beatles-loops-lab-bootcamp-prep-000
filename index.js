function theBeatlesPlay(artists, instruments) {
  var arr = []
  for (var i = 0;i < artists.length; i++) {
    arr[i] = `${artists[i]} plays ${instruments[i]}`
  }
  return arr
}

function johnLennonFacts(facts) {
  for(var i = 0;i < facts.length;i++) {
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(num) {
  var arr = []
  do{
    arr.push("I love the Beatles!")
    num += 1
  }while(num < 15)
  return arr
}