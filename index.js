function theBeatlesPlay (aMusicians, aInstruments)

{
  
  var myArray = [];
  
  for ( var i = 0; i < aMusicians.length; i++  )
  
  {
    
    myArray[i] = `${aMusicians[i]} plays ${aInstruments[i]}`; 
    
  }
  
  return myArray;
}


var musicians = ['John Lennon', 'Alex Jones', 'Donald Trump'];
var instruments = ['guitar', 'fiddle', 'drums'];
console.log(theBeatlesPlay(musicians, instruments));


//////////////////////////////////////////////////////////////////////////////////////////////////


function johnLennonFacts (array)

{
  
  var n = 0;
  
  while (n < array.length)
  
  {
    
    array[n] = array[n] + "!!!"
    n++;
  }
  
  return array;
}


var johnLennonFactsArray = ["He was the last Beatle to learn to drive",
                   "He was never a vegetarian",
                   "He was a choir boy and boy scout",
                   "He hated the sound of his own voice"];

johnLennonFacts(johnLennonFactsArray);
console.log(johnLennonFactsArray);

/////////////////////////////////////////////////////////////////////////////////////////////////

function iLoveTheBeatles (n)

{
  
  var myArray = [];
  var i = 0;
  do 
  
  {
    
    myArray[i] = "I love the Beatles!"
    console.log(i);
    ++i;
    
  }
  
  while (i <= n && n <= 15)
  
  return myArray;
}


console.log(iLoveTheBeatles(7));
