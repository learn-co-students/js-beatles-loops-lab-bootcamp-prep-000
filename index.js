function theBeatlesPlay(musicians,instruments){
  var word = [];
  for (var i = 0; i < musicians.length; i++){
    word.push(musicians[i] + ' plays ' + instruments[i])
  }
  return word
}
function johnLennonFacts(facts){
var newFacts = []
var i = 0 
while( i<facts.length){
newFacts.push(facts[i]+'!!!')
i++
}
return newFacts
}
function iLoveTheBeatles(number){
  var x = []
  do {
    x.push("I love the Beatles!")
    number++
   } while(number<15){
      return x
    }
}
  
  
