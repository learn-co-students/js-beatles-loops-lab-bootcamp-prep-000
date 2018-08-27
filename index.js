function theBeatlesPlay(musicians,instruments){
var arrayBeatles=[];
 for (let musiciansIndex=0;musiciansIndex<musicians.length;musiciansIndex++)
 {arrayBeatles.push(musicians[musiciansIndex] + " plays " + instruments[musiciansIndex])
 }
  return arrayBeatles;
}

function johnLennonFacts(facts){
  var newJohnFacts=[];
  var i= 0;
 while (i<facts.length){
   newJohnFacts.push(facts[i] + "!!!")
   i++;
 }
 return newJohnFacts
}

function iLoveTheBeatles(number){
  var array=[];
  do{array.push("I love the Beatles!")
    number++;
  }
  while(number<15);
  return array;
} 
 
