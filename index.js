function theBeatlesPlay(musicians, instruments) {
  var array=[]
    for (var i=0; i<musicians.length; i++) {
      array.push(musicians[i] +' plays '+instruments[i])
    }
  return array
}

function johnLennonFacts(array) {
  var i=array.length-1
  while (i>=0) {
    array[i]=array[i]+'!!!'
    i-=1
  }
  return array
}

function iLoveTheBeatles(number) {
  var array=[]
    do {
      array.push("I love the Beatles!")
      number++
  } while(number<15)
return array
}
