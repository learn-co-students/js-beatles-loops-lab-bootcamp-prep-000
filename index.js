function theBeatlesPlay (musicians,instruments) {
  var array = []
  for(var i=0;i<musicians.length;i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array
}

function johnLennonFacts (array) {
  var NewArray = []
  var i=0
  while (i<array.length) {
  NewArray.push(`${array[i]}!!!`)
    i++
}
return NewArray
}

function iLoveTheBeatles (n) {
var array=[]
do {  array.push ("I love the Beatles!")
n++
}
  while  (n<15)
  return array
}
