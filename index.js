function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  var whoPlayOnWhat= [];
  for (var i= 0; i < arrayOfMusicians.length; i++){
    whoPlayOnWhat.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]);
  }
  return whoPlayOnWhat;
};
function johnLennonFacts(arrayOfFacts){
  var l= [];
  for (var i= 0; i < arrayOfFacts.length; i++){
    l.push(arrayOfFacts[i] + "!!!");
  }
  return l;
};
function iLoveTheBeatles(numb){
	var iLove= [];
	do{
		iLove.push("I love the Beatles!");
		numb++;
	}while(numb < 15);
	return iLove;
};
