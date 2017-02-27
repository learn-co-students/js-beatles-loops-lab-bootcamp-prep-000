
function theBeatlesPlay(musicians, instruments)
{
  var iarray =[];
  for (var i = 0; i < musicians.length; i++)
  {
    iarray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return iarray;
}

function johnLennonFacts(facts)
{
  for(var i=0; i < facts.length; i++)
  {
    facts[i]= facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n)
{
  var larray = [];
  var x = n;
  do {
    larray[n-x] = "I love the Beatles!"
    n++
  } while (n<15);
  return larray;
}
