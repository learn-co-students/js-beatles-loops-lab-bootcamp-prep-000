function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var temp = []
  for(let i = 0; i < arrayOfMusicians.length; i++) {
    temp.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i])
  }
  return temp
}

function johnLennonFacts (arrayOfFacts){
  var index = 0
  while (index < arrayOfFacts.length) {
    arrayOfFacts[index]+="!!!"
    index++
  }
  return arrayOfFacts
}

function iLoveTheBeatles(number){
  var temp = []
  var tempnum = number
  do {
    temp.push("I love the Beatles!")
    tempnum--
  } while (tempnum >=0 && number < 15)
  return temp
}
