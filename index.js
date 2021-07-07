// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var n = musicians.length;
  for (var i=0; i<n; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  var n = facts.length;
  var i=0;
  while(i<n) {
    array.push(facts[i] + '!!!');
    i++;
  }
  return array; 
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  }  while (n<15);
  return array;
}