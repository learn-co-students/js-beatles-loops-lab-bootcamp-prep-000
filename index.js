var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  var array = []
  for(var i=0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
};
var johnLennonFacts = function(facts) {
    var array = [facts];
    var x=0;
    var y = facts.length;
    while (x<y) {
        facts.push(facts[x] + "!!!");
        x++;
    }
  var facts = facts.slice(y,y*2);
  return facts;
};



function iLoveTheBeatles(num){
  var array = [];
    do {
        array.push("I love the Beatles!")
        num++;
    } while (num < 15);
  return array;
}
