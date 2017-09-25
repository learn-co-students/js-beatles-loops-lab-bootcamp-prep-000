
function theBeatlesPlay(musicians, instruments) {

  var emptyArray = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    emptyArray.push(musician + ' plays ' + instrument);
  }

    return emptyArray;

  }


function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + '!!!')
    i++
  }
  return newArray;
}

function iLoveTheBeatles(number) {
    var newArray = [];
do {
  newArray.push('I love the Beatles!')
}
while (newArray.length <= number && number < 15);

return newArray;
}
