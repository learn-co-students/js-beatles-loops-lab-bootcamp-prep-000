function theBeatlesPlay(arrMus,arrIns){
  let array = [];
  for(let i = 0; i < arrMus.length; i++){
    array[i] = `${arrMus[i]} plays ${arrIns[i]}`;
  }
  return array;
}

function johnLennonFacts(facts){
  let array = [];
  let i = 0;

  while(i < facts.length){
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
  let array = [];
  do {array.push(`I love the Beatles!`)
    num++;
  } while(num < 15);
  return array;
}
