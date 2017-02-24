function theBeatlesPlay( aMusicians, aInstruments ) {

  var myArray = [];
  var myString="";

  for( var i=0; i<aMusicians.length; i++)
  {
    myString = aMusicians[i] + " plays " + aInstruments[i]
    myArray.push(myString)
    myString = ''
  }

return myArray
}


function johnLennonFacts( facts ) {

  var myArray = [];
  var addString = "!!!"
  var tempString = "";
  var i=0;

  while( i < facts.length )
  {
    tempString = facts[i] + addString
    myArray.push( tempString )

    tempString = ""
    i++
  }

  return myArray
}

function iLoveTheBeatles( n ) {

  var myArray = [];
  var myString = "I love the Beatles!";

  do {
     myArray.push( myString )
     n++
  } while( n < 15 )

  return myArray
}
