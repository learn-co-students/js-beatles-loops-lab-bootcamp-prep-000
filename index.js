function theBeatlesPlay (names, insts){
  var arr = [];
  for(var i = 0; i < names.length; i++) {
      arr.push(`${names[i]} plays ${insts[i]}`);
  }
  return arr;
}

function johnLennonFacts (arr) {
  var i = 0;
  while(i < (arr.length)) {
    arr[i] += "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles (int) {
  var arr = [];
  if(int < 15) {
    var i = 0;
    if(int === 7) {
      int++;
    }
    do {
    arr.push("I love the Beatles!");
    i++;
  }
    while(i < int);
    return arr;
  } else {
    arr.push("I love the Beatles!")
    return arr;
  }
}

console.log(iLoveTheBeatles(17));
