// add solution here

function theBeatlesPlay(musicians, instruments)
{
  var arr = [];
  
  for(var i=0; i<musicians.length; i++)
  {
    var sett = musicians[i] + " plays "+ instruments[i];
    arr.push(sett);
  }
  
  return arr;
}

function johnLennonFacts (arr)
{
  var newArr = [];
  var i = 0;
  
  while( i < arr.length)
  {
    newArr.push(arr[i] + "!!!");
    i++;
  
  }
  return newArr;
}

function iLoveTheBeatles(n)
{
  var arr = [];
  
  do{
    arr.push("I love the Beatles!");
    n++;
  }while( n < 15)
  
  return arr;
}


