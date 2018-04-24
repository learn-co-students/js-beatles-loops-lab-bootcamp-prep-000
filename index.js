function theBeatlesPlay(arrMusicians, arrInstruments){
  var arrX =[]
  for (var i=0; i < arrMusicians.length ; i++ )
    {
      arrX.push(arrMusicians[i] + ' plays ' + arrInstruments[i])
    }
  return arrX
}



function johnLennonFacts(arrFacts){
  var i = 0
  var arrStrings = []
  while(i < arrFacts.length){
    arrStrings.push(arrFacts[i] + '!!!')
    i++;
  }
  return arrStrings
}


function iLoveTheBeatles(num){
  var arrY =[]
  do {
    arrY.push("I love the Beatles!")
    num++
  } while (num < 15)
 return  arrY
}