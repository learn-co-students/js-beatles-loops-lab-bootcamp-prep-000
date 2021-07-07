// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  var array = []
  for (let i = 0; i < musicianArray.length; i++){
    array[i] = `${musicianArray[i]} plays ${instrumentArray[i]}`
  }
  return array;
}
function johnLennonFacts(facts) {
  var n = 0
  while(n < facts.length){
  facts[n] = facts[n] + "!!!"
  n++
  }
  return facts
}
function iLoveTheBeatles(n) {
  var empArray = []
  do{
    empArray.push("I love the Beatles!")
    n++
  }while(n<15)
  return empArray
}