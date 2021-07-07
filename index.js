function theBeatlesPlay(musicians, instruments) {
   const play = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play;
}

 function johnLennonFacts(facts) {
   const gotFacts = [ ];
   let i = 0;
   while (i <facts.length) {
   gotFacts.push(`${facts[i]}!!!`)
   i++;
		}
  return gotFacts;
}




function iLoveTheBeatles(number) {
  var beatleLove = [ ];
  
  do {
    "I love the Beatles!";
    beatleLove.push("I love the Beatles!");
    number++;
  }  
    
  while (number < 15);
  return beatleLove;
}


