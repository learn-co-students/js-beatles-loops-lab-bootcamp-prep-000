// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments);

function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(facts){
    var results = [];
    var i = 0;
  while(i < facts.length){
    results.push(facts[i]+"!!!");
  }
  return results;
}
