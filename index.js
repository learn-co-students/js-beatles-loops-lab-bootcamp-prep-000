function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(var i=0; i<musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(arr){
  var a = [...arr];
  for(var i=0; i<a.length; i++){
    a[i] += '!!!';
  }
 return a; 
}

function iLoveTheBeatles(n){
  var a = [];
  do {
    a.push('I love the Beatles!');
    n++
  } while(n<15);
  return a;
}