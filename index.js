// create a function theBeatlesPlay which accepts two parameters an array of musicians and an array of instruments
function theBeatlesPlay(musicians, instruments) {
  // body of the function should create an empty array stored in a variable
  let emptyArray = []; 

  // should also contain a for loop which loops over the array of musicians
  for (let index = 0; index < musicians.length; index++) {
    // the body of the loop should create a string using the first index of the musician array and the first index of the instruments array
    // and should be added to the empty array you created.
    emptyArray.push(`${musicians[index]} plays ${instruments[index]}`);
  }
  
  return emptyArray;
}

// create a function johnLennonFacts it accepts one argument, an array of facts
function johnLennonFacts(facts) {
  let lennonFacts = [];
  
  // use a while loop over the facts array and add "!!!" to the end of every fact.
  let index = 0;
  while (facts[index]) {
    lennonFacts.push(`${facts[index]}!!!`);
    index++;
  }

  // return an array of strings with exclamation points.
  return lennonFacts;
}

// create a function iLoveTheBeatles which accepts a number as a parameter
function iLoveTheBeatles(num) {
  // create a variable that stores an empty array.
  let emptyArray = [];

  // implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
  // the loop should increment the number passed as a parameter.
  // the condition of the loop should check that the parameter number is less than 15
  do {
    emptyArray.push("I love the Beatles!");
    num++;  
  } while (num < 15);

  // return the array of strings.
  return emptyArray;
}