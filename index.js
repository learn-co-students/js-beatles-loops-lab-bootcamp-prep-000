function theBeatlesPlay(musicians,instruments) {
  var arRay = [];
  for (let i=0;i<musicians.length;i++){
    arRay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arRay
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i+=1
  }return facts
}

function iLoveTheBeatles(number) {
  var array = [];
  do {array.push("I love the Beatles!");
  number+=1
}while(number<15);
return array}
