function theBeatlesPlay(players,tools){
  var array=[];
  for (let i=0;i<players.length;i++){
    array.push(`${players[i]} plays ${tools[i]}`);
  }
  return array;
}
function johnLennonFacts(facts){
  var array=[];
  var i=0;
  while (i<facts.length){
    array.push(facts[i]+'!!!');
    i++;
  }
  return array;
}
function iLoveTheBeatles(n){
  var array=[];
  do{
    array.push("I love the Beatles!");
    n++;
  }while (n<15);
  return array;
}