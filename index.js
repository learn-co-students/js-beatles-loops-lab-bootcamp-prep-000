function theBeatlesPlay(mus, ins) {
  var combo = [];
  
  for (var i = 0; i < mus.length; i++) {
    combo[i] = mus[i] + " plays " + ins[i];
  }
  return combo;
}

function johnLennonFacts(array) {
  let x = 0
  while (x < array.length) {
    array[x] = array[x] + "!!!";
    x++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num--;
  } while ((num < 15) && (num > -1));
  return love;
}