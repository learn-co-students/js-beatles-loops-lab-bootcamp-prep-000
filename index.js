function theBeatlesPlay(musicians, instruments){
 let theBeatles = [];
  for (var i = 0; i < 4; i++){
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}

function johnLennonFacts (){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  let i = 0;
  while(i < 4){
    facts[i] = facts[i] + '!!!';
    i++;
  }
  return facts;
  
}

function iLoveTheBeatles(){
  let loveBeatles = [];
  let i = 7;
  if (i <= 15){
    do {
      loveBeatles.push("I love the Beatles!");
      i++;
    }
    while (i < 15); 
    return loveBeatles;
  }
  else {
    i++; i++;
    loveBeatles.splice(0, 7);
    return loveBeatles;
  }
}