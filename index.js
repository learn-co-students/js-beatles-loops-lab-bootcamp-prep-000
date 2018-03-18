function theBeatlesPlay(musician, instrument)
{
  var mArray = [];
  
  for (var i = 0; i < musician.length; i++)
  {
    mArray[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  
  return mArray;
}

function johnLennonFacts(array) {
  
  var mArray = [];
  
  for(var i = 0; i < array.length; i++) {
    mArray[i] = array[i] + "!!!";
    
  }
  
  return mArray
  
}

function iLoveTheBeatles(number)
{
  var mArray = [];
  number + 1;
  
  do {
    mArray.push('I love the Beatles!');
    number++;
  } while (number < 15)
  
  return mArray;
}