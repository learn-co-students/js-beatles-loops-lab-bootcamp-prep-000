var musiciansArr = [];
var instrumentsArr = [];
var stringArr = [];
function theBeatlesPlay(musiciansArr, instrumentsArr){
  var musicString = '';
  var counter = 0;
  for(var i = 0; i < musiciansArr.length; i++){
    musicString = `${musiciansArr[i]} plays ${instrumentsArr[i]}`;
    stringArr.push(musicString);
  }
  return stringArr;
}

var factsArr = [];
function johnLennonFacts(factsArr){
 for(var i = 0; i <factsArr.length; i++){
   factsArr[i] = `${factsArr[i]}!!!`
 } 
 return factsArr
}
var musiciansArr = [];
var instrumentsArr = [];
var stringArr = [];
function theBeatlesPlay(musiciansArr, instrumentsArr){
  var musicString = '';
  var counter = 0;
  for(var i = 0; i < musiciansArr.length; i++){
    musicString = `${musiciansArr[i]} plays ${instrumentsArr[i]}`;
    stringArr.push(musicString);
  }
  return stringArr;
}

var factsArr = [];
function johnLennonFacts(factsArr){
 for(var i = 0; i <factsArr.length; i++){
   factsArr[i] = `${factsArr[i]}!!!`
 } 
 return factsArr
}

function iLoveTheBeatles(n){
  var beatlesArr = [];
  var i = n;
  function incrementVariable() {
  i = i + 1;
  return i;
  }
  do{beatlesArr.push("I love the Beatles!");
  }while(incrementVariable() < 15);
  return beatlesArr;
}
