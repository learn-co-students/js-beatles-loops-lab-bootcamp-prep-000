function theBeatlesPlay(arrMusicians, arrInstruments){
  var arr = []
  
  for(var i = 0; i < arrMusicians.length; i++){
    arr.push(arrMusicians[i] + " plays " + arrInstruments[i])
  }
  return arr
}


function johnLennonFacts(arrFacts){
  var arr = []
  var i = 0
  while(i < arrFacts.length){
    arr.push(arrFacts[i] + "!!!")
    i++
  }
  
  return arr
  
}


function iLoveTheBeatles(number){
  var arr = []
  do{
    arr.push("I love the Beatles!")
    number++
  }while(number<15)
  
  return arr
}