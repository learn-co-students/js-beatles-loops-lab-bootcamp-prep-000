// add solution here
function theBeatlesPlay(musicians,instruments) {
  var Beatles = []
  for (var i = 0; i < musicians.length; i++) {
    Beatles[i] = musicians[i] + ' ' + 'plays' + ' ' + instruments[i] 
  }return Beatles
}


function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts[i] = facts[i] + '!!!'
    i += 1;
  }return newFacts
}

function iLoveTheBeatles(number) {
  var emptyArray = []
  
  do {
    emptyArray.push("I love the Beatles!")
    number ++
    
  } while (number < 15){
    
  }return emptyArray

  
  
  
  
  
}