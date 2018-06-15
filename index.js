function theBeatlesPlay(arrMusicians,arrInstruments){
var newArrayMusiciansAndInstruments = [];

for (let i=0;i<arrMusicians.length;i++){
newArrayMusiciansAndInstruments[i]=`${arrMusicians[i]} plays ${arrInstruments[i]}`
}
return newArrayMusiciansAndInstruments;
}

function johnLennonFacts (arrayFacts) {
  var l=arrayFacts.length;
  var expl='!!!'
  while (l>0){
   arrayFacts[l-1]=`${arrayFacts[l-1]}!!!`; 
   --l;
  }
  return arrayFacts
}
function iLoveTheBeatles(n){
  var crazyLove=[];
  do {
    crazyLove.push('I love the Beatles!');
    ++n;
  } while(n<15);
  return crazyLove;
  
}