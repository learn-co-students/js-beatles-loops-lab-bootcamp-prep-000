// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];

  for (let i = 0; i < musicians.length; i++)
    if (i === 0) {
    allMusicians.push(musicians[0] + " plays " + instruments[0]);
  } else if (i === 1) {
    allMusicians.push(musicians[1] + " plays " + instruments[1]);
  } else if (i === 2) {
    allMusicians.push(musicians[2] + " plays " + instruments[2]);
  } else {
    allMusicians.push(musicians[3] + " plays " + instruments[3]);
  }
  return allMusicians;
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(facts[i] + `${"!!!"}`)
    i++
  }
  return array;
}

function iLoveTheBeatles(n) {
  var array = [];

do {
   array.push("I love the Beatles!");
   n++
} while (n < 15);
return array;
}
