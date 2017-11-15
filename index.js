function theBeatlesPlay(arrayM, arrayI) {
let stringArray = []
  for (let i = 0; i < arrayM.length; i++){
    stringArray.push(arrayM[i] + ' plays ' + arrayI[i])
  }
  return stringArray;
}

function johnLennonFacts(facts){
let i = 0;
let array = [];
  while(facts[i]){
    array.push(facts[i] + '!!!');
    i++;
  }
  return array
}

function iLoveTheBeatles(num){
  let arr = [];
  let i = 0;
  do {
    arr.push('I love the Beatles!')
    i++
  } while (i < num+1  && num < 15 )
  return arr;
}
