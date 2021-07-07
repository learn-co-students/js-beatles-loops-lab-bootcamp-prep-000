function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
var shout = [];
var i = 0;
  while(i < facts.length){
    shout.push(`${facts[i]}!!!`);
    i++;
  }
  return shout;
}

function iLoveTheBeatles(i){
var countArray = [];
do {
  countArray.push('I love the Beatles!');
  i++;
} while (i < 15);
return countArray;
}