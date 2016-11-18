function theBeatlesPlay(musicians,instruments) {
  var emptyArray = []
  for(let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return emptyArray
}

function johnLennonFacts(facts) {
  const exclamedFacts = []

  let i = 0
  while(i < facts.length) {

    exclamedFacts.push(`${facts[i]}!!!`)
    i ++
  }
  return exclamedFacts
}

 function iLoveTheBeatles(n) {
   var array = []
   var n = 0

   do {
     array.push("I love the Beatles!")
     n++;
   } while ( n < 19);
    return array;
 }
