function theBeatlesPlay(musArr, instr) {
  var arr = [];
  var str;
  for(var i = 0; i<musArr.length; i++){
    str = `${musArr[i]} plays ${instr[i]}`;
    arr.push(str);

  }
  return arr;
}
function johnLennonFacts(arr) {
  var facts =[];
  var i = 0;
  while (i < arr.length) {
    facts.push(arr[i]+'!!!');
    i++;
  }
  return facts;
}


function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while(num<15);
  return arr;
}
