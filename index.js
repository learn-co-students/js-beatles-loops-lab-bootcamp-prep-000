// add solution here
function theBeatlesPlay (musicians, instruments) {
  var emptyArray = []

  for (let i = 0; i < musicians.length; i++) {
      emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
    
  return emptyArray
}

function johnLennonFacts (facts) {
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles (number) {
  var array = []
  
  do { array.push("I love the Beatles!")
        number++
  } while (number < 15)
  
  return array
}
