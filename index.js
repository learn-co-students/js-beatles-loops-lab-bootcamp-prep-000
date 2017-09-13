function theBeatlesPlay (musicians, instruments)
{
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++)
  {
    emptyArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return emptyArray;
}

function johnLennonFacts(facts)
{
  var i=0;
  while (i < facts.length)
  {
    facts[i] = facts[i] + "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(index)
{
  var emptyArray = [];
  var i = 0;
  do {
    emptyArray[i] = "I love the Beatles!";
    i++;
    index++;

  } while (index<15);
  return emptyArray;
}
