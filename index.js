// add solution here
function theBeatlesPlay(musicians,instrument){
 var array=[]
 for(var i=0;i<musicians.length;i++){
   array[i]=`${musicians[i]} plays ${instrument[i]}` 
 }
 return array
}
function johnLennonFacts(array1){
  var i=0
  while(array1.length!==i){
    array1[i]=array1[i]+'!!!'
    i++
  }
  return array1
}
function iLoveTheBeatles(num){
  var array2=[]
  do{
    array2.push("I love the Beatles!")
    num++
  }while(num<15);
  return array2
  
}