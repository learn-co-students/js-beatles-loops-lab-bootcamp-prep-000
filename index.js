function theBeatlesPlay(musicians, instruments){
  var combo = [];

  for(let i = 0; i < musicians.length; i++){
    combo[i] = musicians[i] + " plays " + instruments[i];
  }
  console.log(combo);
  return combo;
}

function johnLennonFacts(facts){
  let count = facts.length - 1;
  while(count > -1){
    facts[count] = facts[count] + "!!!";
    count--;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var beatleLove = [];
  do{
    beatleLove.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return beatleLove;
}
