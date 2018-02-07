

function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  var name
  var instrument
  for (let i = 0; i<musicians.length ; i++) {
    name = musicians[i]
    instrument = instruments[i]
    newArray.push(name + " plays " + instrument)
  }
  return newArray
}

function johnLennonFacts(facts){
  var num = 0
  while (num < facts.length){
    facts[num] = facts[num] + "!!!"
    num++
  }
  return facts
}

function iLoveTheBeatles(num){
  var excitement = []
  do{
    excitement.push("I love the Beatles!")
    num++
  } while (num < 15)
  return excitement
}