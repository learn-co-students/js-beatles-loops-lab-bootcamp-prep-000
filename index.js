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
   //starts counting at 0
   do {
  // it("returns an array of 'I love the Beatles!' once when passed the parameter 17"/this means nothing
  // expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
  //8 + 7 = 15
     array.push("I love the Beatles!")
     n++
     ///iterates
   } while ( n < 15)
// n< 15 outputs 14 times; and 17 is 15+2
    return array
 }
