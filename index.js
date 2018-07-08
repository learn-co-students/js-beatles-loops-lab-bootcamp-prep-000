function theBeatlesPlay(musicians,instruments){
  
  var beatlesArray = []
  
  for(var i = 0; i<musicians.length; i++){
    beatlesArray[i]= musicians[i] + " plays " + instruments[i]
  }
  return beatlesArray
}

function johnLennonFacts(jlFacts){
   var i = 0
   var facts = []
   
   while (i < jlFacts.length ) {
     facts[i] = jlFacts[i] + "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  var i = 0
do {
    array[i]= "I love the Beatles!"
    i++;
}
while (i < 15 - n );
return array
}