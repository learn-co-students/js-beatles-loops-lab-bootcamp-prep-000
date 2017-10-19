function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for(var i=0;i<musicians.length;i++) {
    var string = musicians[i]+" plays "+instruments[i];
    newArray.push(string);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var shoutFacts = [];
  var j=0;
  while(j<facts.length) {
    var newFact = facts[j]+"!!!";
    shoutFacts.push(newFact);
    j++;
  }
  return shoutFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number<15);
  return array;
}
