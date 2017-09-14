function theBeatlesPlay(musicians, instruments) {

  var array = [];

  for (var i = 0; i < 4; i++) {
    array.push( musicians[i] + " plays " + instruments[i] );

  }

   return array

}

function johnLennonFacts(facts) {

  var array = []
  var i = 0
  while (i < facts.length) {
    array.push( facts[i] + "!!!" )
    i += 1

  }

    return array
}

function iLoveTheBeatles(number) {

  var array = [];
  do {
    number += 1;
    array.push( "I love the Beatles!" );
  } while (number < 15);

  return array

}
