function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=0 ; i<musicians.length ; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(facts){
var i=0;
//var arr = [];
  while (i < facts.length){
  //arr.push(`${facts[i]}!!!`);
facts[i] = facts[i] + "!!!";
  i++;
    }
  return facts
}


function iLoveTheBeatles(n){
  var arr = [];
    do {
    arr.push("I love the Beatles!")
    n++;
  }
while (n < 15);
return arr
}
