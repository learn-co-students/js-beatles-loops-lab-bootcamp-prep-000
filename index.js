// add solution here
function theBeatlesPlay(magician, instruments) {
  const arr = [];
  for(let i=0; i< magician.length; i++){
    arr.push(`${magician[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts){
  let i=0;
  while(i<facts.length){
    facts[i] +=`!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  const arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }while(num<15);
  return arr;
}