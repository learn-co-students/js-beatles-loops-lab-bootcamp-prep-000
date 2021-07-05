// add solution here

function theBeatlesPlay(musicians , instruments)
{
  var array = [];
  array.length = musicians.length;
  for(let i = 0; i < musicians.length; i++) // damn you indexing
  {
   // var newString = `${musicians[i]]} plays ${instruments[i]}`;
    var newString = `${musicians[i]} plays ${instruments[i]}`
    array[i] = newString;
  }
  return array;
}

function johnLennonFacts(array) // done
{
  
  for(let i = 0; i < array.length; i++)
  {
    array[i] = array[i] + `!!!`;
  }
  return array;
}

function iLoveTheBeatles(number)  // done
{
  var emptyArray = []
  var count = 0;
  do{
    emptyArray[count] = "I love the Beatles!";
    count++;
    number++;
  }
  while(number < 15)
  return emptyArray;
}