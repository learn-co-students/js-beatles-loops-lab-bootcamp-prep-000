function theBeatlesPlay(musicians, instruments){
  const outputArray = []
  for ( let i = 0 ; i < musicians.length; i++)
  {
    outputArray[i] = (musicians[i] + " plays " + instruments[i])
  }
  return outputArray
}

function johnLennonFacts(factsArray){
  var arrayLengthCounter = factsArray.length

  while(arrayLengthCounter>0){
    factsArray[arrayLengthCounter-1] = factsArray[arrayLengthCounter-1] + "!!!"
    arrayLengthCounter--
  }
  return factsArray
}

function iLoveTheBeatles(n){
  const outputArray = []

  do{

    if(n>=15)
    {
      return "I love the Beatles!"
      n=0;
    }

      outputArray[n] = "I love the Beatles!"
      n--;
  }while(n>=0);

  return outputArray;
}
