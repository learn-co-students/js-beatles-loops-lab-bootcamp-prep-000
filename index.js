function theBeatlesPlay(musicians, instruments)
{
  var stringArr = [];
  for(let i = 0; i < musicians.length; i++)
  {
    stringArr.push(musicians[i] + " plays " + instruments[i])
  }
  return stringArr
}

function johnLennonFacts(facts)
{
  var i = 0;
  while(i < facts.length)
  {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number)
{
  var arr = [];
  do{
    arr.push("I love the Beatles!")
    number++
  }while(number < 15);
  return arr
}