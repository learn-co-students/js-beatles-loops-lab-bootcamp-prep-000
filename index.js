// add solution here
function theBeatlesPlay (arrayOfMusicians, arrayOfInst){
  var newArr = []
  for (var i = 0; i < arrayOfMusicians.length; i ++){
    var sentence = arrayOfMusicians[i] + ' plays ' + arrayOfInst[i]
    newArr.push(sentence)
  }
  return newArr
}

function johnLennonFacts (arrayOfFacts){
  var i = 0;
  while(i < arrayOfFacts.length){
    arrayOfFacts[i] = arrayOfFacts[i] + '!!!'
    i++
  }
  return arrayOfFacts
}

function iLoveTheBeatles (number){
  var newArray = []
  do {
    newArray.push('I love the Beatles!')
    number++
  } while (number < 15)
  return newArray
}
