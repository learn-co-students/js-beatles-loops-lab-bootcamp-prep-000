function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < musicians.length; i++) {
    myArray[i] = musicians[i] + " plays " + instruments[i]
  }
  return myArray
}

function johnLennonFacts(facts){
   let i = facts.length;
   while(i-- > 0){
     facts[i] += "!!!";
  }
   return facts;
 }

 function iLoveTheBeatles(number) {
  var array = []
    do {
    array.push("I love the Beatles!")
    number ++
  } while (number < 15);
  return array
}
