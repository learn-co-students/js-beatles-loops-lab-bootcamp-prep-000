
function theBeatlesPlay(musicans,instruments)
{
  var array = []
  for(var i =0;i<musicans.length;i++)
  {array[i]=`${musicans[i]} plays ${instruments[i]}`}
  return array
}
function johnLennonFacts(facts)
{var i =0
  var array= []
  while(i<facts.length)
  {array[i]=`${facts[i]}!!!`
i++}
  return array
}
function iLoveTheBeatles(n)
{
  var array =[]
  do {array.push('I love the Beatles!')
  n++

} while (n<15);
return array
}
