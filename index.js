// add solution here
function theBeatlesPlay(musicians, insturments) {
  let resultArr = [];
  for(let i = 0; i < musicians.length; i++) {
    resultArr.push(`${musicians[i]} plays ${insturments[i]}`);
  }
  return resultArr;
}

function johnLennonFacts(arr) {
  let resultArr = [];
  let i = 0;
  while(i < arr.length) {
    resultArr.push(`${arr[i]}!!!`)
    i++;
  }
  return resultArr;
}

function iLoveTheBeatles(num) {
  let resultArr = [];
  do{
    resultArr.push('I love the Beatles!');
    num++
  } while(num < 15);
  return resultArr;
}
