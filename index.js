function theBeatlesPlay(music, instr){
  var result = [];
  for(var i=0; i<music.length || i<instr.length; i++){
    var str = music[i] + " plays " + instr[i];
    result.push(str);
  }
  return result;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  var newFacts = [];
  while(i < facts.length){
    var strNew = facts[i] + "!!!";
    newFacts.push(strNew);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return arr;
}