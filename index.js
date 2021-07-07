// add solution here
function theBeatlesPlay(musicians, instruments){
  var x = [];
  for(let i = 0; i < musicians.length; i++){
    x.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return x;
}

function johnLennonFacts(facts){
  var i = 0;
  var x = [];
  while(i < parseInt(facts.length)){
    x.push(`${facts[i]}!!!`);
    i++;
  }
  return x;
}

function iLoveTheBeatles(num){
  var x = [];
  do{
    x.push("I love the Beatles!")
    num++
  }
  while(num < 15);
  return x;
}
