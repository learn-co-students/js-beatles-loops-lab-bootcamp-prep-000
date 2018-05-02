function theBeatlesPlay(musicians, instruments){
  var musicianString;
  var musicianInstrument = [];
  for(var i  = 0; i<musicians.length; i++){
    musicianString = musicians[i] + ' plays ' + instruments[i];
    musicianInstrument[i] = musicianString;
  }
  return musicianInstrument;
}
function johnLennonFacts(facts){
  
  var exclamations = [];
  var downcounter = facts.length-1;
  var upcounter = 0;
  while(downcounter>=0){
    exclamations[upcounter] = facts[upcounter] + "!!!";
    downcounter--;
    upcounter++;
  }
  return exclamations;
}
function iLoveTheBeatles(num){
  var outputArr = [];
  do{
    outputArr.push("I love the Beatles!");
    num++;
  }while(num<15);
  return outputArr;
}