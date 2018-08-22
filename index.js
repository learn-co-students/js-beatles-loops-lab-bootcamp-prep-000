function theBeatlesPlay(musicians, instruments) {
  var myArr = []
  for( var i = 0; i < musicians.length; i++) {
    myArr.push(musicians[i]+ ' plays '+(instruments[i]))
  }
  return myArr;
}

function johnLennonFacts(facts) {
 var i = 0;
 var myArr = []
  while(facts.length > i) {
     myArr.push(`${facts[i]}!!!`); 
     i++;
  }
  return myArr;
}

 function iLoveTheBeatles(number) {
   var myArr = [];
   do {
     myArr.push("I love the Beatles!")
     number++;
   } while (number < 15) {
     return myArr;
   }
 }
 