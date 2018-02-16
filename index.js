function theBeatlesPlay(musicArray, instrumentArray){
  var newArray = []
  for(var i = 0; i < musicArray.length; i++){
    var newString = musicArray[i] + ' plays ' + instrumentArray[i]
    newArray.push(newString)
  }
  return newArray
}

function johnLennonFacts(factArray){
  var iterer = 0 
  var newishArray = []
  while(iterer < factArray.length){
    newishArray[iterer] = `${factArray[iterer]}!!!`
    iterer++
  }
  return newishArray
}

function iLoveTheBeatles(number){
  var emptyArray = []
  do{
    emptyArray.push('I love the Beatles!')
    number++
  } while(number < 15)
  return emptyArray
}