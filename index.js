
function theBeatlesPlay(musicians, instruments){
  var array = []
  var i = 0;
 for (i = 0; i < musicians.length; i++){
   array.push(`${musicians[i]}` + " plays " + `${instruments[i]}`)
 }
 return array
}

function johnLennonFacts(facts) {
  var factArray = []
  var i = 0
  while (i < facts.length){
    factArray.push(`${facts[i++]}` + "!!!")
  }
  return factArray
}

function iLoveTheBeatles(n){
 var myArray = []
 var i = 0;
 do {
 myArray.push("I love the Beatles!");
 i++;
 } while (i < n+1 && n < 15);
 return myArray
}
