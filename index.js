// add solution here
function theBeatlesPlay(musician, instruments){
  var newArray = []
  for (let i =0;  i<musician.length;i++){
    newArray.push(`${musician[i]} plays ${instruments[i]}`)
  }
  return newArray
}
function johnLennonFacts(array){
  for (var i =0; i<array.length;i++){
    array[i] += "!!!"
  }
  return array
}
function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!")
    n++
  }
  while(n<15)
  return array
}