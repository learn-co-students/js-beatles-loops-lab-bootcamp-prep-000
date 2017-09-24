function theBeatlesPlay(musicians, instruments) {
  var x = [];
for (let y = 0; y < musicians.length; y++) {
x.push(`${musicians[y]} plays ${instruments[y]}`)
} return x
}

function johnLennonFacts(facts){
  let x = 0;
  var y = [];
  while (x < facts.length) {
    y.push(`${facts[x]}!!!`);
    x++;}
return y
  }

function iLoveTheBeatles (number) {
  var x = [];
  do {
    x.push(`I love the Beatles!`);
    number++;
  }  while (number < 15)
return x
}
