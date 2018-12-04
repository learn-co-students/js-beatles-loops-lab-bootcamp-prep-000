
function theBeatlesPlay(musicians,instruments) {
  var instrumentsPlayedBy = []
  for (var i = 0; i < musicians.length; i++) {
    instrumentsPlayedBy.push(musicians[i] + ' plays ' + instruments[i])
  }
  return instrumentsPlayedBy;
}


function johnLennonFacts(facts) {
 var shoutFacts = [];
 var i = 0;

 while (i < facts.length) {
   shoutFacts.push(facts[i] + "!!!");
   i++;
 }
 return shoutFacts;
}


 function iLoveTheBeatles(number) {
  var muchLove = [];
  var i = 0;

  do {
    muchLove.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return muchLove;
}
