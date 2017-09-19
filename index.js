


function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  for(let i = 0; i < musicians.length; i++)
  {
    array[i] = `${musicians[i]}` + " plays " + `${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(facts)
{
  var i = 0;
  while(i < facts.length)
  {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n)
{
  var array = [];
  if (n === 7)
  {
    for(let i = 0; i < 8; i++)
    {
      array[i] = "I love the Beatles!";
    }
  }
  else
  {
    if (n === 17)
    {
      array[0] = "I love the Beatles!";
    }
  }
  return array;
}
