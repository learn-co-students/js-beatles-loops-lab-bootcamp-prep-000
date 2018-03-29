
function theBeatlesPlay(musicians, instruments) {
  var arrayz = [];
  var counter = 0;
  while (musicians.length > counter) {
    var stringy = `${musicians[counter]} plays ${instruments[counter]}`
    arrayz.push(stringy)
    counter++
  }
  return arrayz;
}

function johnLennonFacts(array) {
  var facty = [];
  var count = 0;
  while (count < array.length) {
    var text = `${array[count]}!!!`;
    facty.push(text);
    count++
  }
  return facty;
}

function iLoveTheBeatles(number) {
  var fan = [];
  do {
    fan.push("I love the Beatles!");
    number++
  } while (number < 15);
  return fan;
}

