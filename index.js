function theBeatlesPlay(musicians, instruments){
  var beatles = []
for (var i = 0; i < musicians.length; i ++){
  beatles.push(musicians[i] + ' plays ' + instruments[i])}
  return beatles
  }
  
function johnLennonFacts(facts){
  var newFacts = []
  var i = 0
  while (newFacts.length < facts.length){newFacts.push(facts[i] + '!!!');
  i++
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var hoo = []
  
  do {
    hoo.push('I love the Beatles!')
    number++
  }
   while(number < 15)
   
  return hoo



  
}
