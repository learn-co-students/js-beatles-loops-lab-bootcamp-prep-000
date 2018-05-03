function theBeatlesPlay(arrMusicians, arrInstruments){
  var arr = []
  
  instrumernt = arrInstruments[0]
  for(var i = 0; i < arrMusicians.length, i++){
    arr.push(arrMusicians[i] + instrumernt)
    console.log(arr)
  }
  return arr
}