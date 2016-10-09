function theBeatlesPlay(musicians, instruments){
  var arr = []

  for (var i=0;i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return (arr)
}

function johnLennonFacts(arr){
  for (var i=0;i<arr.length;i++){
    arr[i] = arr[i]+'!!!'
  }
  return (arr)
}

function iLoveTheBeatles(n){
  var arr = []

  do {
    arr.push("I love the Beatles!")
    n++
  } while (n<15);
  return (arr)
}
