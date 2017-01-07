/*function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < (musicians.length); i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

You can also implement the same using the map function as shwon below */

function theBeatlesPlay(musicians, instruments) {
  if (musicians.length !== instruments.length) {
    throw `Expecting matching number of musicians and instruments. Encountered ${musicians.length} musicians, ${instruments.length} instruments.`
  }

  return [...Array(musicians.length).keys()].map(i => `${musicians[i]} plays ${instruments[i]}`)
}

function johnLennonFacts(facts) {
  var counter = 0;
  var arrayOfStrings = [];
  while(counter < facts.length) {
    arrayOfStrings.push(facts[counter] + "!!!");
    ++counter;
  }
  return arrayOfStrings;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    ++n;
  } while(n < 15);
  return array;
}
