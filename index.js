var theBeatlesPlay = (musicians, instruments) => {
  var array = [];

  for (var i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return array;
};

var johnLennonFacts = (facts) => {
  const shoutedFacts = [];
  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;
  };
  return shoutedFacts;
};

var iLoveTheBeatles = (n) => {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n<15);
  return array;
};
