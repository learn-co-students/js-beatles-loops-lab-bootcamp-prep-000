// add solution here
function theBeatlesPlay(musicians,instruments)
{
  var arr=[]
  var str
  for (var i=0;i<musicians.length;i++)
  {
    str=musicians[i] +' plays '+ instruments[i];
    arr[i]=str
  }
  return arr
}

function johnLennonFacts(facts)
{
  var i=0
  var arr=[]
  while (facts.length>i)
  {
    arr.push(`${facts[i]}`+'!!!');
    i++;
  }
  return arr
}

function iLoveTheBeatles(n)
{
  var arr=[]
  do
  {
    n++
    arr.push('I love the Beatles!')
  }while (n<15)
  return arr
}
