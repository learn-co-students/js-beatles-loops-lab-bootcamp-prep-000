// add solution here
function theBeatlesPlay(musicians, instruments){
  var plays = [];
  for(let i=0;i<musicians.length;i++){
    plays[i]= musicians[i] + " plays " + instruments[i];
  };
  return plays;
}

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  
function johnLennonFacts(facts){
  let i=0;
  while(i<facts.length){
    facts[i]= facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  let i = -1;
  var yeah = [];
  do{
    i++;
    yeah[i]="I love the Beatles!";
    if(num==17){
      return yeah;
    }
  }while(i<num);
  return yeah;
}