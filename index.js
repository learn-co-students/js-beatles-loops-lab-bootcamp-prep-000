var musicians = [];
var instruments = [];


function theBeatlesPlay(musicians, instruments){
  var beatlesPlay = [];
  for(var i=0; i<musicians.length; i++){
     beatlesPlay[i] = musicians[i] + " plays " + instruments[i];
  }
  return beatlesPlay;
};
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i=0;
  var newFacts = [];
  while(i<facts.length){
    newFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newFacts;
};

function iLoveTheBeatles(n){
  var love = [];
  var i = 0;
  do{
    love[i] = "I love the Beatles!";
    i++;
  }
  while(n<15 && i<=n);
  return love;
}
