function  theBeatlesPlay(musicians, instruments){
  var empty = new Array()
  for (let n = 0; n < 4; n++ ) {
    empty.push(`${musicians[n]} plays ${instruments[n]}`)
  }
  return empty
}

function johnLennonFacts(array) {
  var n = 0
  var empty = new Array()
  while (n < array.length) {
    empty.push(`${array[n]}!!!`)
    n++;
  }
  return empty
}
  
function iLoveTheBeatles(n) {
  var array = new Array()
  let count = n
  do {
    array.push("I love the Beatles!")
    count = count + 1
  } while(count < 15)
  return array
}