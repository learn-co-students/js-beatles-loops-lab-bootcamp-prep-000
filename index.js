function theBeatlesPlay(musician, instrument) {
  var array=[]
  for (let i=0; i<musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`) 
 } return array 
 }
 function johnLennonFacts(facts) {
   var i=0
   var array=[]
   while (i<facts.length) {
    array.push(`${facts[i++]}!!!`)
   } return array
 }
function iLoveTheBeatles(i) {
  var array=[]
  do {
    array.push("I love the Beatles!");
    i++
  }while (i<15)
  return array 
}