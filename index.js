function theBeatlesPlay (musicians,instruments){
  var empty = [];
  for (var i = 0; i < musicians.length; i++){
    empty.push(musicians[i] + " plays " +  instruments[i]);
}
    
    return empty;
}
    
function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
       num++;
    } while (num < 15);
    
   return love;
}