// add solution here
function theBeatlesPlay(musicians, instruments) {
  var instruments_per_musician = [];
  
  for( var i = 0; i < musicians.length; i++ ) {
    instruments_per_musician.push( `${musicians[i]} plays ${instruments[i]}` );
  }
  
  return instruments_per_musician;
}

function johnLennonFacts(array) {
  var new_array = [];
  var i = 0;
  
  while( i < array.length  ) {
    new_array.push(`${array[i]}!!!`);    
    i++;    
  } 
  
  return new_array;
}


function iLoveTheBeatles(number) {
  var array = [];
  
  do{
    array.push(`I love the Beatles!`);
    number++;
  } while( number < 15 );
  
  return array;
}