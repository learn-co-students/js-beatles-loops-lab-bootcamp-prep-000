function theBeatlesPlay(musicians, instruments)
{
  var newarray = [];
  for (var i = 0; i < musicians.length; i++)
  {
    newarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newarray;
}

function johnLennonFacts(facts)
{
  var counters = 0;
  var newfacts = [];
  while(facts.length > counters)
  {
    newfacts.push(`${facts[counters]}!!!`);
    counters++;
  }
  return newfacts;
}

function iLoveTheBeatles(n)
{
  var newarray = [];
  do
  {
    newarray.push(`I love the Beatles!`);
    n++;
  }
  while (n<15);
  return newarray;
}