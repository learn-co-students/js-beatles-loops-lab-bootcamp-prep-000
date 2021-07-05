// add solution here
function theBeatlesPlay(musicians, instrument) {
  var emptyAtFirst = [];
  
  for(let i = 0; i < musicians.length; i++) {
    emptyAtFirst.push(musicians[i] + " plays " + instrument[i]);
  }
  return emptyAtFirst;
  
}
 function johnLennonFacts(facts) {
  let h = 0;
  var holder = [];
  while(h < facts.length){
    holder.push(facts[h] + '!!!');
    h++;
  }
  return holder;
}
 function iLoveTheBeatles(num) {
  var loveThem = [];
  do{
    loveThem.push("I love the Beatles!")
    num++;
  } while(num < 15);
  
  return loveThem;
}