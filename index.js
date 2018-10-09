// add solution here
var array = []

function theBeatlesPlay(musicians, instruments) {
  for(var i = 0; i <= musicians.length-1 && instruments.length-1; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  while(array.length >= 0) {
    array.push('!!!')
  }
  return array
}