function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray;
}

function johnLennonFacts (arrayOfFacts){
  const facts = [];
  let i = 0;
   while (i < arrayOfFacts.length) {
     facts.push(`${arrayOfFacts[i]}!!!`);
     i++
   }
   return facts;
}

function iLoveTheBeatles(n){
  var emptyArray2 = [];
  do {
    emptyArray2.push("I love the Beatles!")
    n++
  } while (n<15)
return emptyArray2
}
