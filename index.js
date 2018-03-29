function theBeatlesPlay(musicians,instruments){
const newarray=[]
for (let i =0;i<musicians.length;i++){
  newarray.push(musicians[i]+" plays "+instruments[i])
}
return newarray;
}

function johnLennonFacts(facts){
  const newFacts=[];
  var i=0;
  while (i<facts.length){
    newFacts.push(facts[i]+"!!!");
    i++;
  }
  return newFacts;
}
function iLoveTheBeatles(i){
const newLove=[];
if(i<8){
  do{newLove.push("I love the Beatles!");
i++;
}
while (i<15);
}
else { var i=0;
  newLove.push("I love the Beatles!");
}
return newLove;
}
