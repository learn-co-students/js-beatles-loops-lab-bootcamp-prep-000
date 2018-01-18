function theBeatlesPlay(musicians, instruments){
  var array =[];
    for (var i=0; i < musicians.length; i++){
        array.push(musicians[i] + ' plays ' + instruments[i]);
  }
      return array;
}

function johnLennonFacts(facts){
  var results =[];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count]+ "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(n){
  var array=[];
  do{
    array.push("I love the Beatles!")
    n++;
  } while(n < 15 )
  return array
}
