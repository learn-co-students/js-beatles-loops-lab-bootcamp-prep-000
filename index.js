function theBeatlesPlay(a, b){
  var c = [];
  for (let i = 0; i < a.length; i++){
    var sentence = a[i] + " plays " + b[i];
    c.push(sentence);
  }
  return c;
}

function johnLennonFacts(a){
  var i = 0;
  var b = [];
  while (i < a.length){
    var ln = a[i];
    var nln = ln + "!!!";
    b[i] = nln;
    i++;
  }
  return b;
}

function iLoveTheBeatles(n){
  var a = [];
  do {
    a.push("I love the Beatles!");
    n++;
  } while ( n < 15 );
  return a;
}
