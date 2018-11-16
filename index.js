// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments)
{

  var sentence = [];
  for (var i = 0; i < 4; i++) {
  sentence.push(musicians[i]+' plays '+instruments[i]);

}
return sentence;

}
console.log(theBeatlesPlay(musicians,instruments))

function johnLennonFacts(facts){

var i =0;
while (i<facts.length) {
  facts[i] += '!!!'
i++
}
return facts;
}

function iLoveTheBeatles(someNumber){
  var i = someNumber;
  var someVar = [];
function incrementVariable() {
  i = i + 1;
}
do {


  someVar.push("I love the Beatles!");
  incrementVariable();

} while (i < 15);

return someVar;

}
