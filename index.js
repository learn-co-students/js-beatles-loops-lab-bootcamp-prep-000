// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return arr;
}
function johnLennonFacts(arr){
 for(let i = 0; i < arr.length; i++){
   arr[i]+= "!!!";
 } 
 return arr
}

function iLoveTheBeatles(num){
  var arr = [];
  var x = num;
  do{
    arr.push("I love the Beatles!")
    x++;
  }while(x < 15)
  return arr
}