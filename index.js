// add solution here
function theBeatlesPlay(artists, instruments){
  var result= []
  for (var i = 0; i < artists.length; i++) {
    result[i] = `${artists[i]} plays ${instruments[i]}`
  }
  return result
}

function johnLennonFacts(facts){
  var result = []
  for (var i = 0; i < facts.length; i++) {
    result[i] = `${facts[i]}!!!`
  }
  return result
}

function iLoveTheBeatles(num){
  var point= 15 - num
  var counter = 0
  var result = []
  do {
    result.push("I love the Beatles!")
    counter +=1
  } while (counter < point)
  return result
}
