function theBeatlesPlay(mus, inst) {
var arr=[];
for (var i=0; i<mus.length;i++) {
arr.push(`${mus[i]} plays ${inst[i]}`);
}
return arr;
}

function johnLennonFacts(array){
for (var i=0; i<array.length; i++){
  array[i]+="!!!";
}
return array;
}

function iLoveTheBeatles(num) {
  var new_arr=[];
  do {
    new_arr.push(`I love the Beatles!`);
    num++;
  } while (num<15);
  return new_arr;
}
