//theBeatlesPlay
function theBeatlesPlay(musicians, instruments){
  let actions = new Array();
  for (let i=0;i<musicians.length;i++){
    actions.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return actions
}

//johnLennonFacts
function johnLennonFacts(facts){
  let i = 0;
  while (i<facts.length){
    facts[i] = facts[i]+'!!!';
    i++;
  }
  return facts
}

//iLoveTheBeatles
function iLoveTheBeatles(num){
  let repeat = [];
  do {
    repeat.push('I love the Beatles!')
    num++;
  } while (num<15);
  return repeat;
}
