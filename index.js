// add solution here
// add solution here
function theBeatlesPlay(singers,instr){
  var n = []
  for(var i = 0 ; i < singers.length ; i++ ){
    n.push(singers[i] + " plays " +instr[i])
  }
  return n
}
function johnLennonFacts(facts){
  var n = []
  while(facts.length > 0){
    n.push(facts.shift() + "!!!")
  }
  return n 
}
function iLoveTheBeatles(n){
  var x = []
  do{
    x.push("I love the Beatles!")
    n++
  }
  while(n < 15)
  return x
}