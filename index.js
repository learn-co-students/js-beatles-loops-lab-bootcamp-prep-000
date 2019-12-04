function theBeatlesPlay(musicians, instruments)
{
  var toBeReturned = []
  
  for(var i = 0; i < musicians.length; i++)
  {
    toBeReturned.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return toBeReturned
}

function johnLennonFacts(facts)
{
  var i = 0
  var toBeReturned = []
  
  while(i < facts.length)
  {
    toBeReturned.push(`${facts[i]}!!!`)
    i++
  }
  
  return toBeReturned
}

function iLoveTheBeatles(num)
{
  var i = -1
  var toBeReturned = []
  
  do
  {
    toBeReturned.push("I love the Beatles!")
    i++
  } while(i < num && num < 15)
  
  return toBeReturned
}