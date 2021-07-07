function theBeatlesPlay(musicians,instruments){
var array=[]
  for(let i=0;i<musicians.length;i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(array){
  var i=0
  while(i<array.length){
   array[i]=`${array[i]}!!!`
    i+=1
  }return array
}
function iLoveTheBeatles(num){
 var last=[]
  var i = 0
   if (num > 15){
     last.push("I love the Beatles!")
   }
   else {
  do { i++ 
  last.push("I love the Beatles!")
  }
  while (i < 15-num)
   }return last
  }
