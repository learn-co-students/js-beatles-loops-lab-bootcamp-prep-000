var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice" ];
function theBeatlesPlay(m, ins) {
  var arr = [];
  for(var i=0; i<4; i++) {
    arr[i] = m[i] + " plays " + ins[i];
  }
  return arr;
}

function johnLennonFacts(f) {
  var i=0;
  while(i<f.length) {
    f[i] =  f[i] + "!!!";
    i++;
  }
  return f;
}

function iLoveTheBeatles(n) {
  var arr2 = [];
  var i = 0;
  do {
    arr2[i] = "I love the Beatles!";
    i++;
    n++;
  }while(n<15)
  return arr2;
}
theBeatlesPlay(musicians, instruments);
johnLennonFacts(facts);
iLoveTheBeatles(7);