function theBeatlesPlay(musicians, instruments){
  var ary = []
  for (var i = 0; i < musicians.length; i++){
    ary.push(musicians[i] + " plays " + instruments[i]);
  }
return ary;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var ary2 = [];
  var i = 0;
  while (i < facts.length){
    ary2.push(facts[i] + "!!!");
    i++
  }
  return ary2;
}



function iLoveTheBeatles(i){
  var ary3 = [];
  do {
    ary3.push ("I love the Beatles!");
    i++;
  } while (i < 15);
  return ary3;
}
