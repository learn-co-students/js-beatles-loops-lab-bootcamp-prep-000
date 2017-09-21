function theBeatlesPlay(musicianArray, instrumentArray) {
  const answerArray = [];
  for(let i = 0; i < musicianArray.length; i ++) {
    answerArray.push(`${musicianArray[i]}` + " plays " + `${instrumentArray[i]}`);
  }
  return answerArray;
}

function johnLennonFacts(factsArray) {
  const ansArr = [];
  let i = 0;
  while (i < factsArray.length) {
    ansArr.push(`${factsArray[i]}` + "!!!")
    i ++
  }
  return ansArr;
}

function iLoveTheBeatles(num) {
  const ansArr = []
  do {
    ansArr.push("I love the Beatles!")
    num ++
  } while(num < 15);
return ansArr;
}
