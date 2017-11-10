function theBeatlesPlay(musician,instrument){
  var band = [];
  for (var i = 0; i < 4; i++){
    band.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return band
}

function johnLennonFacts(array){
 var i = 0
 var facts = []
 while (i < array.length){
    facts.push(`${array[i]}!!!`)
   i++
 }
 return facts
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push('I love the Beatles!')
    n++
  }while(n < 15)
  return array
}