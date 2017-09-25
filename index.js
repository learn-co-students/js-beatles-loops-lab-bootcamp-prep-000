function theBeatlesPlay( musicians , instruments) {
var  Beatles= [];
  for(var i = 0; i < musicians.length; i++){
Beatles.push(musicians[i] + " plays " + instruments[i]);

  }
  return Beatles;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0
  while(i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var love =[]
do {
love.push("I love the Beatles!")
n++
} while(n < 15) {

}
return love;
}
