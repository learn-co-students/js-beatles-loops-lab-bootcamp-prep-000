function theBeatlesPlay(m, i) {
  var t=[];
  for (var x=0;m.length>x;x++) {
    t.push(m[x]+" plays "+i[x]);
  }
  return t;
}
function johnLennonFacts(f) {
  var a=[];
  var i=0;
  while (f[i]) {
    a.push(f[i]+"!!!");
    i++;
  }
  return a;
}
function iLoveTheBeatles(n) {
  var o=[];
  do {
    o.push("I love the Beatles!");
    n++;
  } while (n<15);
  return o;
}