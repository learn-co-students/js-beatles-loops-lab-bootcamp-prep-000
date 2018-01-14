function theBeatlesPlay(musicians, instruments) {
  var sentenceArray = []
  var sentenceString
  for(let i = 0; i < musicians.length; i++){
    sentenceString = musicians[i] + " plays " + instruments[i]
    sentenceArray.push(sentenceString)
  }
  return sentenceArray
}
function johnLennonFacts(inputArray) {
  let i = 0
  while (i < inputArray.length) {
    inputArray[i] += "!!!"
    i++
  }
  return inputArray
}
function iLoveTheBeatles(inputNum) {
  var textArray = []
  let i = 0
  do{
    textArray[i] = "I love the Beatles!"
    i++
    inputNum++
  } while (inputNum < 15);
  return textArray
}
