function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(let i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array;
}

function johnLennonFacts(factsArray) {
  let array = [];
  let counterVar = 0;
  // for(let i = 0; i < factsArray.length; i++) {
  //   array.push(factsArray[i] + '!!!');
  // }
  while(counterVar < factsArray.length) {
    array.push(factsArray[counterVar] + '!!!');
    counterVar++;
  }
  return array;
}

function iLoveTheBeatles(n) {
  let array = [];
  // let counterN = 0;
  do{
    array.push('I love the Beatles!');
    n++;
  } while(n < 15);
  return array;
}
