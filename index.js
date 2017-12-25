function theBeatlesPlay(musicians, instruments) {
  var array = []
  var string
  
  for (let i = 0; i < musicians.length; i++) {
    string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }
  
  return array
}

function johnLennonFacts (facts) {
  let i = 0
  var string = "!!!"
  
  while (i < facts.length) {
    facts[i] += string
    i++
  }
  
  return facts
}

function iLoveTheBeatles(number) {
  var array = []
  
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  
  if (number > 15) {
    return array[0]
  } else {
    return array
  }
}