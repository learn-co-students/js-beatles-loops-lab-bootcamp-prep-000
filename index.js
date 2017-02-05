function theBeatlesPlay(musicians,instruments){
    let sentences = [];
    for(let i=0; i<musicians.length; i++){
      sentences.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return sentences
}
function johnLennonFacts(facts){
  let factsArray = [];
  let count = 0;
  while(count<facts.length){
    factsArray.push(`${facts[count]}!!!`)
    count++;
  }
  return factsArray;
}
function iLoveTheBeatles(num){
  let whoYouLove = [];
  let count = num;
  do {
    whoYouLove.push('I love the Beatles!');
    count++;
  } while (count<15)
  return whoYouLove;
}
