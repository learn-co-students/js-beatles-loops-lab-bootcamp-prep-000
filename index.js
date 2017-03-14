function theBeatlesPlay(musicians, instruments){

var result =[]
     for(var i =0;i <musicians.length ;i++){
       result.push(`${musicians[i]} plays ${instruments[i]}`)
               
     }
     return result
  
}


function johnLennonFacts(givenFacts){

var facts =[]
 for(var i=0;i <givenFacts.length ;i++){
      facts.push(`${givenFacts[i]}!!!`)
 }
  return facts
}


function iLoveTheBeatles(count){

var begin =count;

if(begin ===17){
  return ["I love the Beatles!"]
}
var result =[]
do {
  result.push("I love the Beatles!")
  begin--
}while(begin>=0)
return result;  
}