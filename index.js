
function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i=0; i < musicians.length, i <instruments.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(array){
  var i = array.length
  while (i > 0) {
    array[i-1] = array[i-1]+"!!!"
    i--
  }
  return array
}

function iLoveTheBeatles(number){
  var array=[]
  do{
    array.push("I love the Beatles!")
    number++
  }while (number <15)

  return array
}
