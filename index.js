

function theBeatlesPlay(musicians,instruments) {
  var phrases=[];
  for (var i=0; i<musicians.length; i++){
    phrases.push(musicians[i]+" plays "+instruments[i]);
  }
  return phrases;
}




function johnLennonFacts(facts){
  var strings=[];
  var i=0;
  while (i<facts.length){
    strings.push(facts[i]+"!!!"); 
    i++;
  }
  return strings;
}

function iLoveTheBeatles(n){
  var phrases=[];
  do{
    phrases.push("I love the Beatles!");
    n++
  } while (n<15)
  return phrases;
}