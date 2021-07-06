// add solution here
function theBeatlesPlay(arrmu,arrinst)
{
  var emparr =[];
  for(var i=0 ;i<arrmu.length;i++)
  {
    
    emparr[i]=`${arrmu[i]} plays ${arrinst[i]}`;
    
  }
  return emparr
}
function johnLennonFacts(arr)
{
  var i=0;
  while(i < arr.length)
  {
    arr[i]=`${arr[i]}!!!`
    i++;
  }
  return arr
}

function iLoveTheBeatles(num)
{
   var arr=[];
   var i =0;
    do
    {
      arr[i]= "I love the Beatles!"
      i++;
      num++;
    } while(num < `15`)
   return arr
}