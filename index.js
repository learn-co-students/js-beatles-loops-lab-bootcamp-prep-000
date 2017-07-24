function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i = 0; i < musicians.length;i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(arr){
  var index = arr.length - 1
  while( index >= 0){
    arr[index] = arr[index]+"!!!"
    index --
  }
  return arr
}

function iLoveTheBeatles(n){
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while(n<15)
  return arr
}
