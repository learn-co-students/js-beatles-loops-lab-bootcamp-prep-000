function theBeatlesPlay(musicians, instruments)
{
  var length = musicians.length;
  var array = [];
  for(let i=0; i < length ;i++)
  {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(array)
{
  var mark = []
  {
    for(let i=0; i<array.length;i++)
    {
      mark.push(`${array[i]}!!!`)
    }
    return mark
  }
}
function iLoveTheBeatles(n)
{
  var num = []
  do {
    num.push("I love the Beatles!")
    ++n
  } while (n<15);
  return num
}
