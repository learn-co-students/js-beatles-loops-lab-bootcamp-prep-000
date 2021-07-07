// add solution here
function theBeatlesPlay(musicians, instruments) {

   let arr = [];

   for (let i = 0; i < musicians.length; i++ ) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

   return arr
}


 function johnLennonFacts(facts) {

   let newFacts = [];
  var i = 0

   while(i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}


 function iLoveTheBeatles(num) {

   let newArray = [];

   do {
    newArray.push("I love the Beatles!");
    num++
  } while(num < 15); 

   return newArray
}