function theBeatlesPlay(mus, ins) {
   var string = [];

  for(var i = 0; i < mus.length; i++) {
    string.push(`${mus[i]} plays ${ins[i]}`)
  }
   return string;
}

function johnLennonFacts(johnFacts) {
  var i = 0;
  var array = [];
  while(johnFacts.length > i) {
    array.push(`${johnFacts[i]}!!!`);
    i++;
  } return array; }

  function iLoveTheBeatles(i) {
      var empty = new Array();
      do {
      empty.push("I love the Beatles!");      i++;
      } while (i < 15) return empty; }
