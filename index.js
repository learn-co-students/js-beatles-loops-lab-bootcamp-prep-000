function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var arraySentences=[]
 var i
  for (i = 0; i < arrayMusicians.length; i++) { 
  arraySentences.push(arrayMusicians[i] + " plays " + arrayInstruments[i])
}
return arraySentences
}

function johnLennonFacts(arrayFacts) {
  var arrayExclamations=[]
  let x = 0
    while (x < arrayFacts.length) {
  arrayExclamations.push(arrayFacts[x] + "!!!")
  x++;
}
return arrayExclamations
}

function iLoveTheBeatles(number) {
  var arrayEmpty=[]
  
  do {
    arrayEmpty.push("I love the Beatles!")
    number = number + 1 
  } 
  while (number < 15)
  return arrayEmpty
}