// add solution here
// add solution here
function theBeatlesPlay (musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}


//2)
function johnLennonFacts(factsArray){
  var i = 0
  while (i < factsArray.length){
factsArray[i]= factsArray[i] + "!!!";
i++;
}
return factsArray;
}

//3
function iLoveTheBeatles(number){
var loveBeatlesArr = []
do {
  loveBeatlesArr.push ("I love the Beatles!");
number++;
}
while (number < 15);
return loveBeatlesArr;
}

//4
//function iLoveTheBeatles(number){
//var loveBeatlesArr = []//
//do {loveBeatlesArr.push ("I love the Beatles!");
//number++;
//}
//while (number + loveBeatlesArr.length === 15); //less than 15 or equal to number.length ?
//return loveBeatlesArr;
//}
