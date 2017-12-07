function theBeatlesPlay(musicians, instruments){
  var beatlesArr = []

  for (var i = 0; i < musicians.length; i++){
    beatlesArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArr
}

function johnLennonFacts(factArray){
  var excitedArr = []

  for(var i = 0; i < factArray.length; i++){
    excitedArr.push(factArray[i] += '!!!')
  }
  return excitedArr
}

function iLoveTheBeatles(number){
  var loveArr = []

  do{
    loveArr.push('I love the Beatles!')
    number++
  } while (number < 15)
  return loveArr
}
