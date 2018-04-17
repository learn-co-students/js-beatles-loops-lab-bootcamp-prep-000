function theBeatlesPlay(musicians, instruments) {
  var output = [];
  for(var i = 0; i < musicians.length || i < instruments.length; i++) {
    output.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return output;
}

function johnLennonFacts(facts)
{
  var i = 0;
  while(i < facts.length) {
    facts[i++] += '!!!';
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var output = []
  var i = 0;
  do {
    output.push("I love the Beatles!");
  } while(i++ < number && number < 15);
  return output;
}