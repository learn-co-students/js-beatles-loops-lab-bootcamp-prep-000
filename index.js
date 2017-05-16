function theBeatlesPlay(musicians, instruments){
  var newArray = []
  for (let i = 0; i < 4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return newArray;
};

function johnLennonFacts(facts){
  var length = facts.length
  var newArray = [];
  while (newArray.length < facts.length){
    newArray.push(`${facts[newArray.length]}!!!`);
  };
  return newArray;
};

function iLoveTheBeatles(num){
  var allYouNeedIsLove = [];
  do {
    allYouNeedIsLove.push("I love the Beatles!");
    num ++;
  } while (num < 15);
  return allYouNeedIsLove;
};
