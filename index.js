function theBeatlesPlay(musicianArr, instrumentsArr) {
  let array = [];
  for(let i = 0; i < musicianArr.length; i++) {
    array[i] = (`${musicianArr[i]} plays ${instrumentsArr[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  let i = 0;
  while(i < array.length) {
    array[i] = `${array[i]}!!!`;
    i++;
  } 
  return array;
}

function iLoveTheBeatles(n) {
  let array = [];
  do{
    array.push(`I love the Beatles!`);
    n++;
  }while(n < 15);
  return array;
}