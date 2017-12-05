function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(arr) {
  var result= [];
  var i = 0;
  while(i < arr.length) {
     result.push(arr[i] + '!!!')
     i++;
   }
   return result;
 }

function iLoveTheBeatles(n){
   var arr = []
   do{
     arr.push('I love the Beatles!')
     n++
   } while(n < 15)
   return arr
 }
