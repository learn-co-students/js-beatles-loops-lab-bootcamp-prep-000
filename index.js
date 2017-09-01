function theBeatlesPlay(musicians,instruments){
  const array=[];
  for (let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  const newarrayfacts=[];
  for (let i=0;i<facts.length; i++){
     newarrayfacts.push(`${facts[i]}!!!`);
  }
  return newarrayfacts;
}

function iLoveTheBeatles(n){
  const newarray=[];

  do {
    newarray.push(`I love the Beatles!`);
    n++;
  } while (n<15);

  return newarray;
}
