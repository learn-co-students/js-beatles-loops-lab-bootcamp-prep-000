function theBeatlesPlay (musicians, instruments) {
  //var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  //var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var emptyArray = [];

  for (var i = 0; i < musicians.length; i++) { //this loop will start from index 0 and stop at the end of the array
    emptyArray.push(musicians[i] + " plays " + instruments[i]);// pushing to the empty array -> 1st index of musicians combine with play and 1st index of instruments( this is just a tempate)
  }
  return emptyArray
}

function johnLennonFacts (facts){
var i = 0;
while (i < facts.length){
  facts[i] = facts[i] + "!!!"; //the i-th element of "facts" = the i-th element + !!!
  i++;
} //end of the loop
return facts;
}
