var musicians = [];
var instruments = [];
var facts = [];
var aNumber;

function theBeatlesPlay(musicians, instruments) {
  
  var emptyArray = [];
  
  for( let i = 0 ; i < musicians.length ; i++ ) {
    emptyArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return emptyArray;
  
}

function johnLennonFacts(facts) {
  
  var shoutFacts = [];
  var count = 0;
  
  while ( count < facts.length ) {
    shoutFacts.push(`${facts[count]}!!!`);
    count++;
  }
  
  return shoutFacts;
  
}

function iLoveTheBeatles(aNumber) {
  
  var loveBeatlesArray = [];
  
  do{
    loveBeatlesArray.push(`I love the Beatles!`);
    aNumber++;
  } while( aNumber < 15 );
  
  return loveBeatlesArray;
  
}