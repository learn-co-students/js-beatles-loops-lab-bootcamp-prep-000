function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) { 
   array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length)
  {array.push(`${facts[i]}!!!`);
    i++}
  return array;
}

// the below for loop also works in place of the above while loop:

//function johnLennonFacts(facts) {
//  var array = [];
//  for (let i = 0; i < facts.length; i++) { 
//   array.push(`${facts[i]}!!!`);
//  }
//  return array;
//}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!"); n++;
  }
  while (n < 15);
  return array;
}

