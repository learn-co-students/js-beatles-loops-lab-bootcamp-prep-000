
function theBeatlesPlay( musicians, instruments) {
    var emptyarray = [];
    for (var i = 0; i < musicians.length ; i ++){
        emptyarray.push( musicians[i] + " plays " + instruments[i]);
      }
      return emptyarray;
}

function johnLennonFacts(facts){
  var i = 0;
  while ( i < facts.length){
    facts[i] = facts[i] + ["!!!"];
    i++;
  }
  return facts;
}

function iLoveTheBeatles(i){
  var array = [];
  do { array.push ("I love the Beatles!") + i++;
 }
  while (i < 15);
  return array;
}
