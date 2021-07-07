// add solution here
function theBeatlesPlay(musicians, instruments) {
  const arr = [];

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return arr;
}
function johnLennonFacts (jlFactArr){
  let leng = jlFactArr.length;
  let i = 0;
  const shoutedFacts = [];
while (i < leng) {
  shoutedFacts.push(`${jlFactArr[i]}`+'!!!');
  i++;
}
return shoutedFacts;
}
function iLoveTheBeatles(num){
  const loveArr = [];
  do {
    loveArr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return loveArr;
}