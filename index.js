function theBeatlesPlay(musicians,instruments) {
  var play=[]
  var n=musicians.length
  for (let i=0;i<n; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}
function johnLennonFacts(array){
  var facts=[]
  for (let i=0;i<array.length;i++) {
    facts.push(`${array[i]}!!!`)
  }
  return facts
}
function iLoveTheBeatles(num) {
  var ar=[]
  var times=0
  do {
    ar.push("I love the Beatles!")
    times++
  }
  while (times<num+1 && num<15)
  return ar
}
/*function doWhileLoop(array) {
  do {
    array.shift()
  }
  while (maybeTrue() && array.length>0)
  return array
}
*/
