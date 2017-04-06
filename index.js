function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i=0 ;i<=musicians.length-1 ;i++){
    newArray.push(musicians[i]+ " plays " + instruments[i]);
}
  return newArray;
}

function johnLennonFacts(facts){
  var i=0;
  while(i<=facts.length-1){
    facts[i]= facts[i]+'!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array=[];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number<15);
  return array;
}
