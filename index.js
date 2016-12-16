function theBeatlesPlay(artistArray,instrumentArray)
{
  var results=[];
  var artist;
  while(artist=artistArray.shift())
  {
    var instrument=instrumentArray.shift();
    results.push(`${artist} plays ${instrument}`)
  }
  return results;
}

function johnLennonFacts(facts)
{
  var factIndex=facts.length;
  while(--factIndex >= 0)
  {
    facts[factIndex]+='!!!'
  }
  return facts;
}

function iLoveTheBeatles (n)
{
  var result = [];
  do {
    result.push('I love the Beatles!');
  } while (++n < 15)
  return result;
}