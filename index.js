// add solution here
function theBeatlesPlay ( musicians, instruments){
  var temp =[]
  for (var i = 0; i < musicians.length ; i++){
    temp.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temp
}
function johnLennonFacts (facts){
  var temp =[]
  var i = 0
  while ( i <= facts.length - 1){
    temp.push(`${facts[i]}!!!`)
    i++
  }
  return temp
}
function iLoveTheBeatles(n){
  var temp = []
  do{
    temp.push("I love the Beatles!")
    n++
  } while (n < 15)
  return temp
}