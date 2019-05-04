// add solution here
function theBeatlesPlay(musiciansArr, instrumentsArr){
  let arr = [];
  for (let i = 0; i < musiciansArr.length; i++){
    arr.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
  }
  return arr;
}


function johnLennonFacts(factsArr){
  let count = 0;
  let arr = [];
  while (count < factsArr.length){
    let elem = factsArr[count] + '!!!';
    arr.push(elem);
    count++;
  }
  return arr;
}

function iLoveTheBeatles(num){
  let arr = [];
  do {
    arr.push("I love the Beatles!")
    num++;
  }
  while (num < 15);
  return arr;
}