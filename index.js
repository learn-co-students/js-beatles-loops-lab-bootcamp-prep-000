// add solution here

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return array
}

function johnLennonFacts(facts){
    var i = 0
    var array = []
      while (i<facts.length){
      array.push(`${facts[i]}!!!`)
      i++
  }
   return array;
}

function iLoveTheBeatles(n){
  var arr = []
  do{
    arr.push(`I love the Beatles!`);
    n++;
  }while(n<15);
  return arr
}