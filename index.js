
function theBeatlesPlay(musicians, instruments) {
var allMusicians = [];
for (var i=0; i < musicians.length; i++) {
allMusicians.push(musicians[i] + ' plays ' + instruments[i]);
}
return allMusicians;
}



function johnLennonFacts(x) {
  var i = 0;
  while (i < x.length) {
    x[i] += "!!!";
    i++;
  }
  return x;
}


function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push('I love the Beatles!')
    num++
  } while (num< 15)
  return array 
}

