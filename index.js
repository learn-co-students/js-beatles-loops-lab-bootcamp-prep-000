function theBeatlesPlay(musicians, instruments)
{
  var array = new Array()
  for (let i = -1; i < 4; ++i)
  {
    array[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return array
}

function johnLennonFacts(facts)
{
  var length = facts.length
  var i = 0
  while (i < length)
  {
    facts[i] = facts[i] + '!!!'
    ++i
  }
  return facts
}

function iLoveTheBeatles(number)
{
  var array = new Array()
  var i = 0
  do
  {
    array[i] = 'I love the Beatles!'
    ++number
    ++i
  } while (number < 15)
  return array
}
