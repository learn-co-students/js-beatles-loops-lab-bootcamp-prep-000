function johnLennonFacts(facts){
  var lennonFacts = []
  var i = 0
  while (facts.length > i){
    lennonFacts.push(`${facts[i]}!!!`)
    console.log(i++)
  }
  return lennonFacts
  }
  
  
  function iLoveTheBeatles(x){
  var beatles = []
  do {
    beatles.push("I love the Beatles!")
    x++
  } while(x < 15)
  return beatles
}

function theBeatlesPlay(musicians,instruments) {
  const playinTheBeatles=[]
  for (let i = 0, l=musicians.length; i < l; i++) {
    playinTheBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return playinTheBeatles
}