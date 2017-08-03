function theBeatlesPlay(musicians, instruments) {

  var matches = [];

  for (var i=0; i < musicians.length; i++) {
    var match = `${musicians[i]} plays ${instruments[i]}`;

    matches.push(match);
  };

  return matches;
};


function johnLennonFacts(facts) {

  var i = 0;
  var new_facts = [];

  while(i < facts.length){
    var excited = facts[i] + "!!!"

    new_facts.push(excited);
    i++;
  };

  return new_facts;
};

function iLoveTheBeatles(number) {

  var allTheLove = [];

  do {
    allTheLove.push("I love the Beatles!")
    number++
  } while( number < 15 )

  return allTheLove
}
