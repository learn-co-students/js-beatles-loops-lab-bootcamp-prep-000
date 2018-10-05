function theBeatlesPlay(musicians, instruments) {
  function accessBeatle(musicians, index) {
   console.log(musicians[index]);
   }
  function accessInstrument(instruments, index) {
   console.log(instruments[index]);
   }

  var bi = [ ];
    for (let i = 0; i < 4; i++) {
	    var b = accessBeatle(i);
	    var n = accessInstrument(i);
		 bi.push("${b} plays the ${n}.")
	}
	
}

 function johnLennonFacts(array) {
   let f = 0;
   while (f < array.length + 1) {
   var jlf = array[f];
   ++f;
   ${jlf} + " !!!";
   return; 
		}
  
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


