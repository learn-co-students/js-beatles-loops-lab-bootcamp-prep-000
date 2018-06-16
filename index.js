function theBeatlesPlay(musicians,instruments) {
  var emptyarray = [];
  var lm = musicians.length;
  for (let i=0;i<lm;i++) {
var musicSlice = musicians.slice(i,i+1);
var instrSlice = instruments.slice(i,i+1);
var string = `${musicSlice} plays ${instrSlice}`;
    emptyarray.push(string);
    }
    return emptyarray;
}

function johnLennonFacts(facts) {
  var i= 0;
  while (i<facts.length) {
   facts[i] = facts[i] + "!!!"; 
   i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
var i = 0;
var emptyarray= [];
if (number <= 15) {
do {
    emptyarray.push("I love the Beatles!");
    i++;
}
while (i <= number);
return emptyarray;
}
else {
  emptyarray.push("I love the Beatles!");
  return emptyarray;
}


}