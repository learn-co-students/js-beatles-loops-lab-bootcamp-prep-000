function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i <= 3; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
    return array
}

function johnLennonFacts(lennonFacts){
   var exclamationFacts = [];
   var i = 0
   while (i < lennonFacts.length) {
     exclamationFacts.push(lennonFacts[i] + "!!!")
     i++;
   }
   return exclamationFacts;
 }

function iLoveTheBeatles(n){
  var array = [];

do {
  array.push('I love the Beatles!');
  n++;
  } while (n < 15);

  return array;
}
