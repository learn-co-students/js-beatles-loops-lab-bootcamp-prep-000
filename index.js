function theBeatlesPlay(musicians, instruments)
{
  var new_arr = [];
  for (var counter = 0; counter <= musicians.length-1; counter ++)
  {
    new_arr.push(musicians[counter]+" plays " +instruments[counter]);
  }
  return new_arr;
}

function johnLennonFacts(arr_in)
 {
   for (var counter = 0; counter < arr_in.length; counter ++)
   {
    arr_in[counter] = arr_in[counter] +"!!!"
    console.log(arr_in[counter]);
   }
return arr_in;
}

function iLoveTheBeatles(num)
{
  if (num > 14)
  {
    return ["I love the Beatles!"]
  }
  
  var new_arr=[];
  var counter = 0;
  do {
    new_arr.push("I love the Beatles!")
    counter ++;
    }
  while (counter <= num)
  return new_arr;
}
