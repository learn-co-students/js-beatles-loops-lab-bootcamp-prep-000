// add solution here
function theBeatlesPlay (musician, instrument) {
  var plays = [];
  for (var i=0 ; i< musician.length; i++){
    plays.push (`${musician[i]} plays ${instrument[i]}`);
  }
  return plays;
}

function johnLennonFacts (array){
 var i= 0;
 var facts = [];
 while (i< array.length) {
   facts.push (`${array[i]}!!!`);
   i++; 
 }
 return facts;
}

function iLoveTheBeatles (number){
  var facts =[];
  do {
    facts.push ("I love the Beatles!");
   number ++;
  }
  while(number < 15);
  return facts
}

