function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var whoPlays = [];
  var string;
  for(var i = 0; i < 4; i++) {
    string = `${arrayMusicians[i]} plays ${arrayInstruments[i]}`;
    whoPlays.push(string);
  }  
  return whoPlays;
}

function johnLennonFacts(arrayFacts){
  var string;
  var i = 0;
  var facts = [];
  while(i< arrayFacts.length){
     string = `${arrayFacts[i]}!!!`;
     facts.push(string);
     i++;
   }
   return facts;
}

function iLoveTheBeatles(number){
  var mania = [];
  do{
    mania.push('I love the Beatles!');
    number++;
  } while(number< 15);
  return mania;
}






