function theBeatlesPlay(arr_m, arr_i){
  var arr_n = [];
  for (var i=0; i<arr_m.length; i++) {
    arr_n.push(`${arr_m[i]} plays ${arr_i[i]}`);
  }
  return arr_n;
}

function johnLennonFacts(arr){
  var i=0;
  while (i < arr.length) {
    arr[i] = arr[i] + '!!!'
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n){
  var arr=[];
  do {arr.push('I love the Beatles!');
    n++;
    }
    while (n < 15);
  return arr;
}
