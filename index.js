function theBeatlesPlay (musician, instruments) {
  let mus = [];
  for(var i = 0; i < musician.length; i++){
    mus[i] = musician[i] + " plays " + instruments[i];
  }
  return mus;
 }

function johnLennonFacts(facts){
 let count = facts.length -1;
 while (count > -1){
   facts[count] = facts[count] + "!!!";
   count--;
 }
 return facts;
}

function iLoveTheBeatles (num){
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return arr;
}