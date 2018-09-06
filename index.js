
function theBeatlesPlay(musicians,instruments) {
 var array =[]
  for (let i=0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
 return array
}
let i=0
function johnLennonFacts(facts) {
 var array =[]
  while(i<facts.length) {
   array.push(`${facts[i]}!!!`);
   i++
 }
return array
}