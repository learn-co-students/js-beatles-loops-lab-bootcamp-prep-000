function theBeatlesPlay(musicians,instruments){
  const array =[];
  for (let i = 0,j= musicians.length;i<j;i++){
array.push (`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
  }
  function johnLennonFacts(facts){
    const exclamationPoints = [];
    let i = 0;
    while (i < facts.length){
      exclamationPoints.push (`${facts[i]}!!!`);
      i++;
    }
    return exclamationPoints;
  }
function iLoveTheBeatles(n) {
  const love =[];
  do {
  love.push ("I love the Beatles!");
  n++;
} while (n < 15);
return love;
}
  
  
  