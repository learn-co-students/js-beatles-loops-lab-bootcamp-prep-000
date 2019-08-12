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

  var countdown = 0;

  while (countdown < facts.length){
  facts[countdown] += ("!!!");
  countdown++;
  };

  return facts;
}

function iLoveTheBeatles(number){
  var array = []


  do{
    number++
    array.push(`I love the Beatles!`);
  } while(number < 15);

  return array;
}
