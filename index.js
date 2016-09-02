function theBeatlesPlay(musicians, instruments) {
  var new_array = [];
  var new_string;
  for (let i=0; i < musicians.length; i++) {
    new_string = musicians[i] + " plays " + instruments[i];
    new_array.push(new_string);
  }
  return new_array;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var new_array = [];
  var count = 0;
  if (number < 15) {
    number = number + 1;
    do {
      new_array.push("I love the Beatles!");
      count += 1;
    }
    while (count < number);
  }
  else {
    new_array.push("I love the Beatles!");
  }
  return new_array;
}
