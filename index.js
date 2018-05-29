function theBeatlesPlay(mus,ins){
  var beef = [];
  for (let i = 0; i < mus.length; i++){
    beef[i] = mus[i] + " plays " + ins[i]; 
  }
  return beef;
}
function johnLennonFacts (facts){
  let pu = 0;
  while (pu<facts.length){
      facts[pu] += "!!!";
      pu++;
  }
  return facts;
}
function iLoveTheBeatles (num){
  var arr=[];
  
  do {
    arr.push("I love the Beatles!");
    num++;
  }while(num<15);
  return arr;
}