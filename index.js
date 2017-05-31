function theBeatlesPlay(instr,music) {
  var result = [];
  for(var i = 0; i < music.length; i++) {
      result.push(instr[i] +" plays " + music[i])
  }
  return result;
}

function johnLennonFacts(arr) {
  var i = 0;
  var result = [];
  while (i < arr.length) {
    result.push(arr[i] + "!!!");
    i++;
  }
  return result;
}

function iLoveTheBeatles(num) {
  var result =[];
  var count = num;
  do {
    result.push("I love the Beatles!");
    count ++;
  } while (count < 15);
  return result;
}