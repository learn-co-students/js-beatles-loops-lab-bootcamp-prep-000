function theBeatlesPlay(name,items){
  var arr = [];
  for(var i = 0; i < name.length; i++){
    arr.push(`${name[i]} plays ${items[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return arr;
}
