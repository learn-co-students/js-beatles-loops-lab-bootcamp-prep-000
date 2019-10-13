// add solution here
function theBeatlesPlay(musicians,instruments) {
  var mi = [];
  var m;
  for (m = 0; m < musicians.length; m++) {
    mi.push(`${musicians[m]} plays ${instruments[m]}`)
  }
  return mi
}

function johnLennonFacts(jlfacts) {
  var jlfex = [];
  var f = 0;
  while (f < jlfacts.length) {
    jlfex.push(`${jlfacts[f]}!!!`);
    f++;
  }
  return jlfex
}

function iLoveTheBeatles(num) {
  var ilb = [];
  var n = num;
  do {
    ilb.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return ilb;
}