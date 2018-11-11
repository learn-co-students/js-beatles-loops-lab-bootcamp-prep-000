// add solution here
function theBeatlesPlay(mus, inst){
  let arr = [];
  for(let i = 0; i < mus.length; i++){
    arr.push(`${mus[i]} plays ${inst[i]}`);
  }
  return arr;
}
function johnLennonFacts(arr){
  let i = 0;
  while(i < arr.length){
    arr[i] += "!!!"
    i++;
  }
  return arr;
}
function iLoveTheBeatles(num){
  let arr = [];
  do {
    arr.push(`I love the Beatles!`);
    num++;
  } while (num < 15);
  return arr;
}
