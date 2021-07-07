// add solution here
function theBeatlesPlay (musicians, instruments)
{
  var arr = [];
  for (var i = 0, n = musicians.length ; i < n ; i++)
  {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  
  return arr;
}

function johnLennonFacts(arr)
{
  var i = 0, n = arr.length;
  while (n > 0 && i < n)
  {
    arr[i] = arr[i]+ '!!!';
    i++;
  }
  return arr;
}

function iLoveTheBeatles(i)
{
  var arr = [];
  do
  {
    arr.push("I love the Beatles!");
    i++;
  }
  while(i < 15);
  return arr;
}

