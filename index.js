function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    console.log(newArray.push(musicians[i] + " plays " + instruments[i]));
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
   facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
var array = [];
  do 
  {
  array.push("I love the Beatles!");
  n++;
  } 
  while (n < 15);
  
  return array;
}
