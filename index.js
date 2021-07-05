// add solution here
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(instruments, musicians ) {
    var theBeatlesPlayArray = [];
    for(let i = 0; i < musicians.length; i++) {
      var x = instruments[i]+ " plays " + musicians[i];
      theBeatlesPlayArray.push(x);
    }
    return theBeatlesPlayArray;
}
const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

//function johnLennonFacts(facts) {
 // var johnlennonARRAY = [];
  //for(let i = 0; i < facts.length; i++) {
    //var x = facts[i] + "!!!";
    //johnlennonARRAY.push(x);
  //}
  //return johnlennonARRAY;
//}

function johnLennonFacts(facts) {
    var johnlennonARRAY = [];
  while (facts.length > johnlennonARRAY.length) {
    var x = facts[johnlennonARRAY.length] + "!!!";
	johnlennonARRAY.push(x);
  }
  return johnlennonARRAY;
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  function incrementVariable() {
  num = num + 1;
  return num;
}
  do { if (num === 7){
    for (let i = 0; i < 8; i++) {
      beatlesLove.push("I love the Beatles!");
}} else {
      beatlesLove.push("I love the Beatles!");
}
} while (incrementVariable() < num);
  return beatlesLove;
}
