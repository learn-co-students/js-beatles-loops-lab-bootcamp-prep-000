function theBeatlesPlay(musicians, instruments){
  var array=[];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(factsarray){
//counter
var n=0

while (n<factsarray.length) {
    factsarray.push(factsarray(n)+'!!!');
    n=n+1;
    }
    return factsarray
}
