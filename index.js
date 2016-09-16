function theBeatlesPlay(musicians,instruments)
{
  var functionArray = [];
  for(let i = 0; i<((musicians.length));i++)
  {
    functionArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return functionArray
}
function johnLennonFacts(array)
{
  var functionArray = []
  var i= 0
  while(i<array.length)
  {
    functionArray.push(`${array[i]}!!!`)
    i++

  }
  return functionArray
}
function iLoveTheBeatles(n)
{
  var functionArray=[]
  do {
    functionArray.push('I love the Beatles!')
    n++
  } while (n<15);
  return functionArray
}
