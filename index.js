function theBeatlesPlay(m, x){
  var temp = []
  for (var i=0; i<4; i++){
    temp.push( m[i] + " plays " + x[i])
  }
  return temp
}
function johnLennonFacts(a){
  var x=a.length;
  var g = 0
  var temp = []
  while (x>0){
    temp.push(a[g] + "!!!");
    x--;
    g++;
  } 
  return temp 
}
function iLoveTheBeatles(x){
  var temp = [];
  do {temp.push ("I love the Beatles!");
  x++;
  }
  while (x<15);
  return temp
}