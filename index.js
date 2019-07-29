// add solution here
function theBeatlesPlay(musicians, instruments) {
    var allMusicians = [];
    for (var i=0; i < musicians.length; i++) {
        allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
    return allMusicians;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
