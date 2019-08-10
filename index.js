function theBeatlesPlay(musicians,instruments){
    var array = []

    for (var i = 0; i < 5; i++){
      if (i===1){
        array.push("John Lennon plays Guitar" );
      } else if (i===2){
        array.push("Paul McCartney plays Bass Guitar");
      } else if (i===3){
        array.push("George Harrison plays Lead Guitar");
      } else if (i===4){
        array.push("Ringo Starr plays Drums");
      }
    }
    return array;
}

function johnLennonFacts(facts){

  while (johnLennonFacts < 3){
  facts[arrayIndex] += ("!!!");
  johnLennonFacts++
  };
  return facts;
}
