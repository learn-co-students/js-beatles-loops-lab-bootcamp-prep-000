function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
    }
  return array;
}

theBeatlesPlay(musicians, instruments);


var facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        
function johnLennonFacts(facts) {
  var exclaimedArray = [];
  let i = 0;
  while(i < facts.length) {
    exclaimedArray.push(facts[i] + "!!!");
    i++;
  }
  return exclaimedArray;
}

function iLoveTheBeatles(number){
  var emptyArr = [];
do {
    emptyArr.push("I love the Beatles!");
    number++;
  } while (number < 15); {
    
  }
  return emptyArr;
}
iLoveTheBeatles(25);