function theBeatlesPlay(musicians, instruments){
  var newMusic= [];
  for (let i = 0; i < musicians.length; i++) {
  newMusic.push(musicians[i]+ " plays " + instruments[i]);
 }
 return newMusic
 }
 
 
 function johnLennonFacts(facts){
 var newArray = [];
  let counter = 0;
  while (counter < facts.length){
    newArray.push(facts[counter]+ "!!!");
    counter++;
  }
    return newArray;
  }
 

 function iLoveTheBeatles(number){
   var newVar=[];
   
   do{
     newVar.push("I love the Beatles!");
      number++;
   }while(number < 15)
  
     return newVar
   
 }