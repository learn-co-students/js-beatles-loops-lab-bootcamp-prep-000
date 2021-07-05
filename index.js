// add solution here
function theBeatlesPlay(musicians, instrument) {
  var emptyAtFirst = [];
  
  for(let i = 0; i < musicians.length; i++) {
    emptyAtFirst.push(musicians[i] + " plays " + instrument[i]);
  }
  return emptyAtFirst;
  
}

function johnLennonFacts(facts) {
  let g = 0;
  var holder = [];
  while(g < facts.length){
    holder.push(facts[g] + '!!!');
    g++;
  }
  return holder;
}

function iLoveTheBeatles(num) {
  var truism = [];
  do{
    truism.push("I love the Beatles!")
    num++;
  } while(num < 15);
  
  return truism;
}