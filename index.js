// add solution here
function theBeatlesPlay (musicians, instruments){
  var empty=[]
  
 for (var index = 0; index< musicians.length; index++) { 
 var  string= `${musicians[index]} plays ${instruments[index]}`  
    empty.push(string)
} 
  return empty
}


function johnLennonFacts(facts){
var newfactsarray=facts
 var i=0
 while ( newfactsarray.length>i ){
  newfactsarray.push(newfactsarray[i]+"!!!")
  i++
}
  return newfactsarray
}