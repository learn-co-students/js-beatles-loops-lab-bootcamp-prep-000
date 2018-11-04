// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  let anArr = [];
  for (let i = 0; i < musicianArray.length; i++) {
    let curMus = musicianArray[i];
    let curIns = instrumentArray[i];
    anArr.push(curMus + " plays " + curIns);
  }
  return anArr;
}

function johnLennonFacts(factsArr) {
  let anArr2 = [];
  let i = 0;
  while (i < factsArr.length) {
    let curFact = factsArr[i];
    curFact = curFact + "!!!";
    anArr2.push(curFact);
    i++;
  }
  return anArr2;
}

function iLoveTheBeatles(aNum) {
  let anArr3 = [];
  do {
    anArr3.push("I love the Beatles!")
    aNum++
  } while (aNum < 15)
  return anArr3;
}