// add solution here

function theBeatlesPlay(arrayMusicians, arrayInstruments){
var array=[]  
  
    for (var i = 0 ; i < arrayMusicians.length ; i++){
      array.push(arrayMusicians[i]+ " plays " + arrayInstruments[i])
    }
    return array 
}

function johnLennonFacts(facts){
    var array=[]
    var i=0
  while (i< facts.length)
  {
    
    array.push(facts[i]+"!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var array=[]
  
  do{
    n++
    array.push("I love the Beatles!")
  }
  while(n<15)
return array
  
}
