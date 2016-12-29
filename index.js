var factcount=0
function theBeatlesPlay(musicians,instruments)
{
  var whoplayedwhat=[]
  var x=0
  while (x<musicians.length)
  {
  whoplayedwhat.push(`${musicians[x]} plays ${instruments[x]}`)  
  x++
  }
  return whoplayedwhat
}
function johnLennonFacts(facts)
{  
  var lennonfacts=[]
  var x=0
  while (x<facts.length)
  {
  lennonfacts.push(`${facts[x]}!!!`)  
  x++
  }
  return lennonfacts
}

function iLoveTheBeatles(x)
{
  var array=[];
  for (var count=0;count<=x;count++)
  {
    if (x<16)
    {array.push("I love the Beatles!")}
    else 
    {array.push("I love the Beatles!")
     count=x}
  }
  return array
}