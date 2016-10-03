function theBeatlesPlay(musicians,instruments)
{
  var beatles = []
  for (let i=0; i<musicians.length; i++)
    {
      beatles.push(`${musicians[i]} plays ${instruments[i]}`)
      }
  return beatles
  }

  function johnLennonFacts(facts)
  {
  var factsnw = [];
  let i = 0
  while(i < facts.length)
  {
  factsnw.push(`${facts[i]}!!!`)
  i++;
  }
  return factsnw;
  }

  function iLoveTheBeatles(n)
  {
    var nw = []

    do {
      nw.push("I love the Beatles!")
      n++;
    }
    while (n < 15)
    return nw
  }
