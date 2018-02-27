function theBeatlesPlay(musicians, instruments) {
  var Beatles = new Array();
  
  for (let i = 0; i < musicians.length; i++) {
	    
    Beatles.push(musicians[i] + " plays "+ instruments[i]);
  }
  
  return Beatles;  
}

function johnLennonFacts (facts) {
  var i = 0;
  do {
    facts[i] = facts[i] + "!!!";
    i++;
  } while(i < facts.length);
  
  return facts;
}

function iLoveTheBeatles (numb) {
  var iLoveArray = new Array();
  
  do {
    iLoveArray.push("I love the Beatles!")
    numb++;
  }while (numb < 15);
  
  return iLoveArray;
}

