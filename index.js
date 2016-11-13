function theBeatlesPlay(arrMusicians, arrInstruments) {
  const arr=[];
  for (let i=1, i < arrMusicians.length;i++) {
    arr.push("${arrMusicians[i]} plays ${arrInstruments[i]}");
  }
  return arr;
}

function johnLennonFacts(array) {
  const shout=[]
  let i=0
  while (i<shout.length) {
    shout.push("${shout[i]}!!!");
  } return shout;
}

function iLoveTheBeatles(n) {
  const arr=[];
  do {
    arr.push("I love the Beatles");
    n++;
  } while (n<15)
  return arr;
}
