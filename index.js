function theBeatlesPlay(musicians, instruments){
  var musiciansPlay = new Array();

  for (var i = 0; i <= musicians.length -1 ; i++){
    musiciansPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansPlay;
}

function johnLennonFacts(facts){
var i = 0;
  while(i < facts.length){
    facts[i]= facts[i]+"!!!";
    i++;
  }
return facts;
}

function iLoveTheBeatles(n){
  var love = new Array();
  var i = 0;
  do{
    love.push("I love the Beatles!");
    i++;
  } while(n <= 15 && i <= n);
  return love;
}
