// add solution here
function theBeatlesPlay(musicians, instruments){
  var sul = [];
  for (var i = 0; i < musicians.length; i++) {
    sul.push(musicians[i] + " plays " +instruments[i]);
  }
  return sul;
}

function johnLennonFacts(facts){
  var sul = [];
  var count = 0;
  while (count <= facts.length -1){
    sul.push(facts[count] + "!!!");
    count++;
  }
  return sul;
}

// function johnLennonFacts(facts){
//   var sul = [];
//   forEach(function(fact){
//     sul.push(fact + "!!!");
//   });
//   return sul;
// }
// function johnLennonFacts(facts){
//   var sul = [];
//   var count = 0;
//   while (count <= facts.length){
//     sul.push("!!!");
//     count++;
//   }
//   return sul;
// }

function iLoveTheBeatles(num){
  var sul = [];
  do {
    sul.push("I love the Beatles!");
    num += 1;
  } while(num < 15);
  return sul;
}