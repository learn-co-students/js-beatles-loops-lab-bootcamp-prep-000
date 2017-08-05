function theBeatlesPlay(musicians, instruments){
  var arr = []
  //var len = musicians.length
  for (let i = 0; i < musicians.length; i++){
    arr.push(musicians[i]+" plays "+instruments[i])
  }
  return arr
}

function johnLennonFacts(array){
  var newarray = []
  var i = 0
  while(i<array.length){
    newarray.push(array[i]+"!!!")
    i++
  }
  return newarray
}

function iLoveTheBeatles(number){
  var newarray = []
  do {newarray.push("I love the Beatles!")
      number++}
  while (number < 15)
  return newarray
}
