function theBeatlesPlay(musicians, instruments)
{
  var master = new Array();

  for (var i = 0; i < musicians.length; i++)
  {
    master.push(musicians[i] + " plays " + instruments[i])
  }
  return master
}

function johnLennonFacts(facts)
{
  var i = 0
  var master = new Array();

  while (i < facts.length)
  {
    master.push(facts[i] + "!!!")
    i++
  }
  return master
}

function iLoveTheBeatles(number)
{
  var master = new Array();

  do {
    master.push("I love the Beatles!")
    number++

  } while (number < 15);

  return master
}
