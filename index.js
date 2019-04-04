function theBeatlesPlay(musicians, instruments){
  var beatles = new Array();
  for (let i = 0; i < musicians.length; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}

function johnLennonFacts(facts){
  var i = 0;
  var exclamationArray = new Array();
  while (i < facts.length) {
    exclamationArray.push(facts[i] + "!!!")
    i++;
  }
  return exclamationArray;
}

function iLoveTheBeatles(number){
  var loveArray = new Array();
  var i = 0;
  
  do{
    loveArray.push("I love the Beatles!");
    i++;
  } while (i <= number && number <15);
  
  return loveArray;
}