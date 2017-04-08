function theBeatlesPlay(arr1,arr2)
{
  var a=[];
  for(let i=0;i<arr1.length;i++) {
    a[i]=arr1[i]+' plays '+arr2[i];
  }
  return a;
}

function johnLennonFacts(arr)
{
  for(let i=0;i<arr.length;i++)
  {
      arr[i]=arr[i]+'!!!';
  }
  return arr;
}

function iLoveTheBeatles(count)
{
  var a=[];
  do {
    a.push('I love the Beatles!');
  } while (++count<15);
  return a;
}