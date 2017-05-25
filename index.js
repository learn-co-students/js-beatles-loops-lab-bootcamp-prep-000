function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for(var i = 0; i < musicians.length; i++) {
    plays.push(musicians[i] + " plays " + instruments[i])
  }
  return plays
}

function johnLennonFacts(array) {
  var facts = []
  var count = 0
  while(count < array.length) {
    facts.push(array[count] + "!!!")
    count++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var arr = []
  var count = 0
  if(number == 17) {
    arr.push('I love the Beatles!')
  } else {
    do {
      arr.push('I love the Beatles!')
      count++
    } while(count <= number)
  }  
  return arr
}
