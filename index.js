// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(let i = 0; i < musicians.length; i ++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while( i < facts.length){
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var love = [];
  if (num < 15){
    let i = num;
    do {
      i++;
      love.push("I love the Beatles!");
    } while (i < 15);
  }
  else {
          love.push("I love the Beatles!");
  }
  return love;
}