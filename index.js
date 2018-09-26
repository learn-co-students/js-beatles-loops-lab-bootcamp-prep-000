// add solution here
function theBeatlesPlay (musicians, instruments){
  var BeatlesArray = [];
  var i;
  for (i = 0; i < musicians.length; i++){
    BeatlesArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return (BeatlesArray);
}

function johnLennonFacts (facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return (facts);
}

function iLoveTheBeatles(number){
  var BeatleLove = [];
  do {
      BeatleLove.push("I love the Beatles!");
      number++;
      }
    while (number < 15);
    return (BeatleLove);
}
