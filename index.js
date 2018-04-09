function theBeatlesPlay(musicians, instruments) {
  var array = []
  for ( let i = 0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  array
  }
  return array
}

function johnLennonFacts(array){
 var lmd = []
  let x = 0
  while (x < array.length) {
    lmd.push(`${array[x]}` + "!!!")
  x += 1
}
  return lmd
}

function iLoveTheBeatles(numb) {
  var lmd = []
  var x = 0
  do { lmd.push("I love the Beatles!")
  x += 2
  } while ((x < 15) && (numb < 15))
  return lmd
}