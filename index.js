function theBeatlesPlay(musicians,instruments){
  const array = [];
  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)}
    return array
  }
function johnLennonFacts(facts){
var i=0;
var arr = [];
  while (i < facts.length){
  arr.push(`${facts[i]}!!!`);
  i++;
//facts[i] = facts[i] + "!!!";
    }
  return arr
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
