// add solution here

function theBeatlesPlay(mus, inst) {
  var plays = [];
  for (var i = 0; i < mus.length; i++) {
    plays.push(`${mus[i]} plays ${inst[i]}`);
  }
  return plays;
}

function johnLennonFacts(array) {
  var j = 0;
  while (j < array.length) {
    array[j] = `${array[j]}!!!`;
    j++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var newarray = [];
  do {
    newarray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newarray; 
}