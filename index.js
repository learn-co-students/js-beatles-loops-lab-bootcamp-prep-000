function theBeatlesPlay(musicians, instruments) {
  var i = 0
  var beatles = []
  for (i === 0; i < 4; i++){
  beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return beatles
}

function johnLennonFacts (facts) {
  var i = 0
  while (facts.length > i)  {
  facts[i] = facts[i] + "!!!"
  i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var i = 0
  var array = []
    if (number < 14) {
      do array.push("I love the Beatles!"), i++
        while (array.length <= number);
        return array
  }  else return("I love the Beatles!")
}
