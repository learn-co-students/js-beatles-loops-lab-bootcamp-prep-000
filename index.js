// add solution here

function theBeatlesPlay (musicians, instruments) {
  var myArray = [];
  
  for (var i = 0; i < musicians.length ; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray
}


function johnLennonFacts (facts) {
  var x = 0;
  var factArray = facts.slice();
  do {
    factArray[x] = factArray[x] + "!!!";
  } while (++x < facts.length);
  return factArray;
}

function iLoveTheBeatles(num) {
  var loveArray = [];
  
  do {
    loveArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return loveArray;
}
