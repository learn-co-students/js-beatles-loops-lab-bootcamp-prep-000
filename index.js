function theBeatlesPlay(musicians, instruments) {  // for loop that adds musician and the instrument they play from each array to empty array
  var arr1 = [];
  for (var x = 0; x < 4; x++) {
      arr1.push(musicians[x] + " plays " + instruments[x]);
  }
  return arr1;
}
function johnLennonFacts(facts) { // while loop that adds "!!!" to each fact from the facts array into an empty array
  var arr2 = [];
  var y = 0;
  while ( y < facts.length) {
    facts[y] = facts[y] + "!!!";
    y++;
  }
  return facts;
}
function iLoveTheBeatles(z) { // do while loop that adds "I love the Beatles!" while z < 15
  var arr3 = [];
  do {
    z++;
    arr3.push("I love the Beatles!");
    } while (z < 15);
 return arr3;
}