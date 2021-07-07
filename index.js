// add solution here
var array=[];
function theBeatlesPlay(arrayMusicians,arrayInstruments){
  for(var i =0; i<arrayMusicians.length;i++){
  
        array.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
    
  
  }
  
  return array;
}


function johnLennonFacts(array){
  var inc=0; 
  while(inc<array.length){
    
    array[inc]= array[inc] + "!!!"  ;
    inc++;
  }
  return array;
}

function iLoveTheBeatles(num){
  var array=[];
  do{
    array.push("I love the Beatles!");
    num++;
  }while(num<15);
  return array;
}