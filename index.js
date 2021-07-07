// add solution here
function theBeatlesPlay(musician,instrument){
  var arry=[];
  for(var i=0;i<musician.length;i++){
    arry.push(musician[i]+" plays "+instrument[i]);
  }
  return arry;
}
 function johnLennonFacts(facts){
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
 }
 function iLoveTheBeatles(num){
   var empt=[];
  
   do{
 empt.push("I love the Beatles!");
     num++;
   }while(num<15);
   
    return empt;
 }