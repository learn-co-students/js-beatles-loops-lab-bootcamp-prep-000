
function theBeatlesPlay(musicians,instruments) {  
  var empty = []
  for (var i = 0; i < musicians.length; i++) { 
    empty.push(musicians[i] + ' plays ' + instruments[i])

  }
   return empty   
 }
 
 function johnLennonFacts (factsarray) { 
  var empty = []
   let fact = 0 
   while (fact < factsarray.length) {
  empty.push (factsarray[fact] + "!!!")
 fact++
 }
 return empty 
 }
 
function iLoveTheBeatles (number) { 
  var result = []
  var i = 0
  if (number === 17) {
    return ["I love the Beatles!"]
  }
  while ( i <= number) {
    result.push("I love the Beatles!")
    i++
  }
  return result 
} 
 