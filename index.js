// add solution here

// given two arrays of musicians and instruments,
// write a statement of who plays what instrument
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];

  for(var i = 0; i < musicians.length; i++) {
    let str = `${musicians[i]} plays ${instruments[i]}`;
    whoPlaysWhat.push(str);
  }

  return whoPlaysWhat;
}

// given an array of facts, add "!!!" to each fact
function johnLennonFacts(array) {
  var facts = [];
  let i = 0;

  while(i < array.length) {
    facts.push(`${array[i++]}!!!`);
  }

  return facts;
}

// given a number 'n', creat an array of at least ONE line of, but
// no more than n times, a statement
function iLoveTheBeatles(n) {
  var loveStatement = [];

  do {
    loveStatement.push("I love the Beatles!");
    n++;
  } while(n < 15);

  return loveStatement;
}
