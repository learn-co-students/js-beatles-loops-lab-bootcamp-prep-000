function theBeatlesPlay(musicians,instruments){
  var theArray = [];
  for (let i=0; i<musicians.length; i++){
    theArray.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return theArray
}

function johnLennonFacts(facts){
var theArray = [];
var i=0;
while(i<facts.length){
  theArray = [...theArray,`${facts[i]}!!!`];i++;
};
  return theArray;
}

function iLoveTheBeatles(i){
  var theArray = [];
  do {theArray.push("I love the Beatles!");i++;}
  while (i<15);
  return theArray;
}
