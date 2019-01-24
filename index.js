// add solution here
function theBeatlesPlay (musicians, instruments){
  var empty=[]
  
 for (var i = 0; i< musicians.length; i++) { 
 var  string= `${musicians[i]} plays ${instruments[i]}`  
    empty.push(string)
} 
  return empty
}


function johnLennonFacts(facts){


var newfactsarray=[]
 var i=0
 while ( facts.length>i ){
  newfactsarray.push(facts[i]+"!!!")
  i++
}
  return newfactsarray
}

function iLoveTheBeatles(number){
  var empty=[];

  do {
    empty.push("I love the Beatles!");
    number++ ;
  }
 
 while (number<15)
  
  return empty
}

