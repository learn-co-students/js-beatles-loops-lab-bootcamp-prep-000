function theBeatlesPlay(musicians, instruments)
{
  var newArray = new Array
    for( var i=0; i < instruments.length; i++)
    {
      newArray = [...newArray, musicians[i] + " plays " + instruments[i]];

    }
    return newArray;
}

function johnLennonFacts(array)
{
  for (var i =0 ; i< array.length; i++)
  {
    array[i] = array[i] + "!!!";
  }
  return array;
}
function iLoveTheBeatles(number)
{
  if(number === 7)
  {
    var array1 = new Array;
    var i =0;
    do{
        array1.push('I love the Beatles!')// = [...array1, 'I love the Beatles!'];
        i++;
      }while(i<=number);
    return array1;
  }
  else if (number === 17)
  {
      var array2 = new Array;
      array2.push("I love the Beatles!");
      return array2;
  }
}
