function theBeatlesPlay(players, instruments) {
  
    var allPlayers = [];
    
    for (var i=0; i < players.length; i++) {
      
        allPlayers.push(players[i] + " plays " + instruments[i]);
        
    }
    
    return allPlayers;
}


function johnLennonFacts(facts) {
  

 var moreFacts =[];
 let i=0;
  
 while ( i < facts.length) {
moreFacts.push(facts[i] + "!!!" );
 i++;
 
  }
  
  return moreFacts;
}

function iLoveTheBeatles(number) {
  
  var newArray = [];
  
  
  do {
    
    newArray.push("I love the Beatles!");
    number++;
  
} while ( number < 15);

return newArray;

}

iLoveTheBeatles(7);
