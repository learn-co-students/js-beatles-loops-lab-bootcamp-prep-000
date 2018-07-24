// add solution here
function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i=0; i < musicians.length; i++ ){
    array[i]= musicians[i] +" plays "+ instruments[i]   
  }
  return array
}



function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    facts[i]=facts[i]+"!!!";
    i++
  }
  return facts
}


function iLoveTheBeatles(parameter){
  var array=[];
  do{ array = [...array, "I love the Beatles!"];
  parameter++
  } while(parameter<15)
  return array
}