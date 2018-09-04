// add solution here
var theBeatlesPlay = function(a,b){
  var arr = [];
  for(var i=0;i<a.length;i++){
    arr.push(`${a[i]} plays ${b[i]}`)
  }
  return arr
}

var johnLennonFacts = function(a){
  var arr = [];
  var j =0;
  while (j < a.length){
    arr.push(`${a[j]}!!!`)
    j=j+1;
  }
  return arr
}

var iLoveTheBeatles = function(n){
  var arr = [];
  var i = 0;
  do{
    arr.push('I love the Beatles!')
    i++;
  }
  while (i<=n && n<15);
  return arr;
}