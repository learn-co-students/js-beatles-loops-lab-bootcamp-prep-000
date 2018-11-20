// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var emptyArray = []
  for (var i=0;i < arrayMusicians.length;i++){
    emptyArray.push(arrayMusicians[i] + " plays " + arrayInstruments[i])
  }
  return emptyArray
}


function johnLennonFacts(arrayFacts){
  var count = arrayFacts.length
  while(count > 0){
    --count
    arrayFacts[count] += "!!!"
  }
  return arrayFacts
}

function iLoveTheBeatles(num){
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    num++
  } while(num < 15)
  return emptyArray
}

