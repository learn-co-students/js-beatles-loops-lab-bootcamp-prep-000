function theBeatlesPlay(musicians, instruments) {
  var str = []; 
  for(var i =0; i < musicians.length; i++) {
    str.push(musicians[i] + " plays " + instruments[i]);
  }
  return str;
}
const facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
]; 

function johnLennonFacts(facts){
  var newFacts = [];
    let i = 0;
    while (i < facts.length) {
        newFacts.push(`${facts[i]}!!!`);
        i++;
    }
    return newFacts;
}


function iLoveTheBeatles(num){
  var loveArr = [];
  do {
    loveArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return loveArr;  
}