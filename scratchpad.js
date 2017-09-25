function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  for (var i=0; i < facts.length; i++) {
      array.push(facts[i] + "!!!");
  }
  return array;
}



//closer
function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  var i = 0;
  for (var i=0; i <= facts.length; i++) {
      array.push(facts[i] + "!!!");
    }
  return array;
}
