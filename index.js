// add solution here
function theBeatlesPlay(musicians, instruments){
  let arr = []
  for (var i = 0; i < musicians.length; i++) {
    arr[i] = musicians[i]+" plays "+instruments[i]
  }
  return arr
}

function johnLennonFacts(array){
  let i = 0
  while (array.length != i) {
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(num){
  let arr = []
  let i = 0
  do{
    arr[i] = "I love the Beatles!"
    i++;
    num++;
  }while(num < 15)
  return arr
}
