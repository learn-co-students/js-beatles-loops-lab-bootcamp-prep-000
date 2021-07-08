// add solution here

function theBeatlesPlay(artists, instruments){
  var list = []
  for (var i = 0; i < artists.length; i++){
    var str = `${artists[i]} plays ${instruments[i]}`
    list.push(str)
  }
  return list
}

function johnLennonFacts(facts){
  var list = []
  var counter = 0
  while (counter < facts.length){
    var str = `${facts[counter]}!!!`
    list.push(str)
    counter = counter + 1
  }
  return list
}

function iLoveTheBeatles(n){
  var list = []
  do {
    list.push("I love the Beatles!")
    n = n + 1
  }while(n < 15)
  return list
}