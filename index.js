

function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
   beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray;
}

function johnLennonFacts(facts){
  let lennonArray = [];
  let count = -1;
  while (count < facts.length-1) {
    count++;
    console.log(count);
    lennonArray.push(`${facts[count]}!!!`);
  }
  return lennonArray;
}

function iLoveTheBeatles(num){
  let newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num++
  } while (num < 15);
  return newArray;
}
