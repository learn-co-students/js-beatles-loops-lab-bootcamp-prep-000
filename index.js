function theBeatlesPlay(musicians,instruments) {
  var comboArray = [];
  for (let i = 0; i < musicians.length; i++) {
    (musicians.length > 1 && instruments.length > 1);
    comboArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return comboArray;
}

function johnLennonFacts(facts) {
  var x = "!!!";
  let index = 0;
  while (facts[index]) { //how is this an ending for a loop?
    facts[index] = facts[index] + x
    index++; //what does the ++ syntax mean?
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")

  } while (num < 15 && array.length <= num)
return array;
  }
