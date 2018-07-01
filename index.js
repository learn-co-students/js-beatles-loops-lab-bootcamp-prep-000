

function theBeatlesPlay(muso, inst) {
  var comment = [];
  var idx = muso.length;
  if(idx > inst.length) {
    idx = inst.length;
  }
  
  for(var i = 0;i<idx;i++) {
    comment[i] = muso[i] + " " + inst[i];
  }
  return comment;
}

function johnLennonFacts(array) {
  var facts = [];
  var i = 0;
  while(i < array.length) {
    facts[i] = array[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(idx) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    idx++;
  }
  while ( idx < 15 )
  return array;
}