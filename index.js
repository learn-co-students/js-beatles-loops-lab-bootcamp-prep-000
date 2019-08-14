// add solution here


function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments){
  var array=[];
  for(let i=0;i<arrayOfMusicians.length; i++){
    array.push(arrayOfMusicians[i]+" plays "+arrayOfInstruments[i]);
  }
  return array;
  }
  
 function johnLennonFacts(facts){
   var array=[];
   var i=0;
   while (i<facts.length){
     array.push(facts[i] + '!!!');
     i++;
   }
   return array;
 }
 
 function iLoveTheBeatles(number){
    
   var array=[];
   do{
     array.push("I love the Beatles!");
     number++;
   }
   while(number<15);
   return array;
 }