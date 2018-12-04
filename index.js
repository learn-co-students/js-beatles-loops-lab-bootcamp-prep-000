// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var array = []
  var i = 0
  for(; i < musicians.length; i++)
  {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(facts)
{
  var factsNew = []
  var i = 0
  while(i < facts.length)
  {
    factsNew[i] = `${facts[i]}!!!`
    i += 1
  }
  return factsNew
}
function iLoveTheBeatles(n)
{
  var arr = []
  do{
    arr.push("I love the Beatles!")
    n++
  }while(n < 15)
  return arr
}