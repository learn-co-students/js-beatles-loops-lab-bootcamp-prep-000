function theBeatlesPlay(arrOfMusicians, arrOfInstruments) {
  let newArr = [];
  for (let i = 0; i < arrOfMusicians.length; i++) {
    newArr.push(`${arrOfMusicians[i]} plays ${arrOfInstruments[i]}`);
  }
  return newArr;
}

function johnLennonFacts(arrOfFacts) {
  let newArr = [];
  for (let i = 0; i < arrOfFacts.length; i++) {
    newArr.push(`${arrOfFacts[i]}!!!`);
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let newArr = [];
  do {
    newArr.push('I love the Beatles!');
    num++;
  } while (num < 15)
  return newArr;
}
