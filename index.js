function theBeatlesPlay(musicians, instruments){
  var jam=[];
  for (var i=0; i<musicians.length; i++){
    jam.push(musicians[i]+ " plays " + instruments[i]);
  }
  return jam;
}

function johnLennonFacts(facts){
  var excitingFacts=[];
  var i=0;
  while (i<facts.length){
excitingFacts.push(facts[i]+"!!!");
i++;

  }
  return excitingFacts;

}

function iLoveTheBeatles(number){
  var feelings=[];

do {
    feelings.push("I love the Beatles!")
  number++;
  } while(number<15);
  return feelings;
}
