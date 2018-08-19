function theBeatlesPlay(musicians, instruments) {
 var newArray= []
 for (var i = 0 ; i < musicians.length ; i++) {newArray.push(`${musicians[i]} plays ${instruments[i]}`)
 }
 return newArray
}

function johnLennonFacts(facts) {
  newArray= []
  var i = 0
  while (facts[i]) {
    newArray.push(facts[i]+"!!!");
    i++;
  }
  return newArray
}

function iLoveTheBeatles(number) {
  newArray = []
 do {
   number++;
   newArray.push("I love the Beatles!")
 }
   while (number < 15);
   return newArray
}

 
