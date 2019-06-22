// add solution here
function theBeatlesPlay(musicians, instruments){
  var output =  [];
  for (var i =0; i< musicians.length; i++ ){
    output.push(musicians[i]+ " plays " +instruments[i]);
  }
  return output
}


function johnLennonFacts (facts){
  var i = 0;
  var new_fact = []
  while (i < facts.length) {
  new_fact[i] = facts[i]+"!!!"
  i++
    }
    return new_fact
  }


function iLoveTheBeatles(number){
  var output = []
  function incrementVariable() {
  number = number +1;
  return number;
  }
  do { output.push("I love the Beatles!")}
  while (incrementVariable() < 15);
  return output
}
console.log(iLoveTheBeatles (13))



