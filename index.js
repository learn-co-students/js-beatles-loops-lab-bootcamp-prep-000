function theBeatlesPlay(musicians, instruments)
{
  var newArray = [];

  for(var i = 0; i < musicians.length; i++)
  {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray[i] = musician + " plays " + instrument;
  }

  return newArray;
}

function johnLennonFacts(facts)
{
  var adjustedFacts = [];

  while(facts.length > 0)
  {
    adjustedFacts.push(facts[0] + "!!!");
    facts.shift();
  }
  return adjustedFacts;
}

function iLoveTheBeatles(number)
{
  var loveArray = [];

  do {
      loveArray.push("I love the Beatles!");
      number++;
    } while (number < 15);
  return loveArray;
}
