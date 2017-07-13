//Problem 1

function theBeatlesPlay(musicians,instruments) {

  var newArray = [];

  for (var i = 0; i < musicians.length; i++) {

      let string = `${musicians[i]} plays ${instruments[i]}`

      newArray.push(string);

  }

  return newArray;

}

//Problem 2

function johnLennonFacts(facts) {

var emphaticFacts = [];

while (0 < facts.length) {

  emphaticFacts.push(`${facts.shift()}!!!`);

}

return emphaticFacts;

}

//Problem 3

function iLoveTheBeatles(n) {

  var love = [];

  do {
    love.push('I love the Beatles!');

    n++;

  } while (n < 15);

  return love;

}
