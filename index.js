function theBeatlesPlay(musicians, instruments){
  var matched = []
  for(var i = 0; i < musicians.length; i ++){
    matched.push(musicians[i]+" plays "+instruments[i])
  }
  return matched
}
function johnLennonFacts(facts){
  for(var i = 0; i < facts.length; i ++){
    facts[i] = facts[i]+"!!!"
  }
  return facts
}
function iLoveTheBeatles(num){
var i = 0, string = []
if(num < 15){
do{
string.push("I love the Beatles!")
i++
}while(i <= num)
return string
}
return "I love the Beatles!"
}
