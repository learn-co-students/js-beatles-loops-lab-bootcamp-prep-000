function theBeatlesPlay(music, instrum) {
  var strings = [];
  for (var i = 0; i < music.length; i++) {
    strings.push(music[i] + " plays " + instrum[i])
  }
  return strings;
}

function johnLennonFacts(array) {
  var cont = 0;
  while (cont < array.length) {
    array[cont] += "!!!"; 
    cont++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
