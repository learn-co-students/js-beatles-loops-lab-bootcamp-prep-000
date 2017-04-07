function theBeatlesPlay(musicians, instruments){
  const empty = []
  for (let i = 0, l = musicians.length; i < l; i++) {
     empty.push(`${musicians[i]} plays ${instruments[i]}`) 
   }
 
   return empty
 }

 function johnLennonFacts(facts){
   const realfacts = []
let i = 0
   while (i < facts.length) {
  realfacts.push(`${facts[i]}!!!`) 
  i++
}    
    return realfacts
  }

  function iLoveTheBeatles(n){
    const love = []
    let i = 0
    do {
  love.push("I love the Beatles!") 
  n++;
} while (n < 15);
  
  return love}