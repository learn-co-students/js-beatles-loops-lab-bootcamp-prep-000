
function theBeatlesPlay(mus,inst){
  var newArray = [];
  for (var i=0; i<[mus.length]; i++){
  newArray.push(`${mus[i]} plays ${inst[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i=0;
  while(i < [facts.length]) {
  facts[i] = `${facts[i]}!!!`;
  ++i;
  }
  return facts
}

function iLoveTheBeatles(x){
  var makeLove=[];
  do{
    makeLove.push(`I love the Beatles!`);
    ++x;
  } while (x<15);
  return makeLove;
}