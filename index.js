// add solution here

function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
    for (var i = 0; i < 4; i++) {
      beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
      return beatlesArray;
}


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
    return newFacts;
}


// var i = 0;
// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// 1) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
// ReferenceError: iLoveTheBeatles is not defined

// 2) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17: MEANING IT FAILS
// ReferenceError: iLoveTheBeatles is not defined

function iLoveTheBeatles(number) {
  var i = 0
  var newArray = []
  do {
    number = number + 1;
    i = i + 1;
    newArray.push("I love the Beatles!");
    i++;
  } while (number < 15);
return newArray;
}

1+