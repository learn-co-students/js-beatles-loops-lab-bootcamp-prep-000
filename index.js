function theBeatlesPlay(musicians,instruments){
var theBand = new Array();
for(var i=0;i<musicians.length;i++){
theBand.push(musicians[i] + " plays " + instruments[i]);
};
return theBand;
}




function johnLennonFacts(facts){
  var newFacts= new Array();
  var i=0;
  while(i<facts.length){
  newFacts.push(facts[i++]+("!!!"));
  }
return newFacts;
}
