function theBeatlesPlay(array1, array2) {
  var arr = [];
  for(var i=0; i<array1.length; i++){
      arr.push(array1[i] + " plays " + array2[i]);
  }
  return arr;
}
function johnLennonFacts(array3) {
  var i = 0;
  while(i<array3.length) {
    array3[i]+="!!!";
    i++;
  }
  return array3;
}
function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num<15);
  return arr;
}