function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}
function johnLennonFacts(array){
var i = 0
  while(i < array.length){
    array[i] = (array[i] + "!!!")
    i++
  }
  return array
}
function iLoveTheBeatles(number){
  var array = []
  var i = 0
  do{
    array[i] = "I love the Beatles!"
    number++
    i++
  }while(number < 15)
  return array
}
