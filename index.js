// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var counter = 0; counter < musicians.length ; counter++){
    arr[counter]= `${musicians[counter]} plays ${instruments[counter]}`;
    
  }
  return arr;
}

function johnLennonFacts(facts){
  var counter = 0;
  while( counter < facts.length ) {
    facts[counter]= `${facts[counter]}!!!`;
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  var i =0;
  do{
    array.push('I love the Beatles!');
    i++;
    } while(i <= number && number < 15);
    
  return array;
}