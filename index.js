function theBeatlesPlay(musicians, instruments){
  let arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}
function johnLennonFacts(array){
  let i = 0;
  while(i < array.length){
    array[i] += '!!!';
    i++;
  }
  return array;
}
function iLoveTheBeatles(num){
  let arr = [];
  let i = 0;
  do{
    arr.push("I love the Beatles!");
    i++;
  } while(i <= num && num < 15)
  return arr;
}