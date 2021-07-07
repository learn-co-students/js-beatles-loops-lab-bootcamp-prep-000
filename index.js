// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesPlayArray = [];
  
  for (var i = 0; i < musicians.length; i++){
    beatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlayArray;
}

function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  
  while(i < facts.length) {
    array[i] = `${facts[i]}!!!`;
    i++;
  }
  
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number++;
  } while(number < 15)
  
  return array;
}