// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [] 
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`) 
  } 
  return array 
}

function johnLennonFacts(facts){ 
  var i = 0 
  var newFacts = [] 
  while (i < facts.length){ 
    newFacts.push(`${facts[i]}!!!`) 
    i += 1 
  } 
  return newFacts 
}

function iLoveTheBeatles(num){ 
  var loveBeatles =[] 
  do { 
    loveBeatles.push("I love the Beatles!") 
    num++ 
  } while (num < 15)
  return loveBeatles 
}