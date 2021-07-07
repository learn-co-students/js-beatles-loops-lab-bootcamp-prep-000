// add solution here
function theBeatlesPlay(musicians, instruments){
  var temp = [];
  for (var i=0; i < musicians.length; i++){
    temp[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return temp;
}

function johnLennonFacts(facts){
  var i= 0;
  while (i< facts.length){
    facts[i] = facts [i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var temp= [];
  var i=0;
  do {
    temp[i] = "I love the Beatles!";
    number++;
    i++;
  }
  while(number<15);
  return temp;
}
