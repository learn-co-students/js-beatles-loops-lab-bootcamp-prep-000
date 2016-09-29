function theBeatlesPlay(musicians, instruments) {
  var combo_arr = [];
  for (let i = 0; i < musicians.length; i++)
{
  combo_arr.push(`${musicians[i]} plays ${instruments[i]}`)
}
    return combo_arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length)
  {
  facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts
}

function iLoveTheBeatles(n) {
  var new_arr = [];

  do {
    new_arr.push("I love the Beatles!");
    n++;
  }
while (n < 15);
    return new_arr;
}
