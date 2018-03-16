function theBeatlesPlay(musicians,instruments) {
  var myArray = [];
  for (let i = 0; i < 4; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  var loudFacts = [];
  var i=0;
  while (facts[i]) {
    loudFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(num) {
  var myArray= [];
  do {
    myArray.push("I love the Beatles!");
    num++;
  } while (num<15);
  return myArray;
}