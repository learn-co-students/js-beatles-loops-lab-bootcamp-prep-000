function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}
function johnLennonFacts(a){
  var x=true;
  var y = a.length-1;
  while(x){
    a[y]=a[y]+'!!!'
    if(y===0) (x = false);
    y--;
  }
  return a
}
function iLoveTheBeatles(n){
  var empty = [];
  do{
    empty.push("I love the Beatles!")
    n++;
    
  }while(n<15)
  return empty;
  
}





