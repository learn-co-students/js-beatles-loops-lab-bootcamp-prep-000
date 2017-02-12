function theBeatlesPlay( musicians, instruments ) {
  var array = [];
  var index = 0;

    for( index; index <  musicians.length; index++ ) {
      var testString = musicians[index] + ' plays ' + instruments[index];
      array.push(testString);

    }
    return array;
}

function johnLennonFacts( facts ) {
  var index = 0;
  var testArray = [];

  while( index < facts.length ) {
    var tempString = facts[index] + '!!!';
    testArray.push(tempString);
    index++;
  }
  return testArray;
}

function iLoveTheBeatles( number ) {
  var index = 0;
  var testArray = [];

  do {

    testArray.push( "I love the Beatles!");
    number++;

  } while ( number < 15);
  return testArray;
}
