var musicians= ["theWeekEnd","Russ","Migos"];
var instruments= ["drums","guitar","saxophone"];

function theBeatlesPlay (musicians,instruments) {
    var emptyArray=[]
      for (var i=0; i<4; i++) {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
      emptyArray;
      }
    return emptyArray;
}
var facts=["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

/*
function johnLennonFacts (facts) {
  var i=0;
  var n= "!!!";
    while (i < facts.length) {
    facts[i]+n;
    i++;
    }
  return facts;
}
*/



function johnLennonFacts (array) {
  var anotherEmptyArray=[];
  var i=0;
  var n= "!!!";
    while (i<array.length) {
    anotherEmptyArray.push(`${array[i]+n}`)
    i++;
    }
  return anotherEmptyArray;
} 


var num;
function iLoveTheBeatles (num) {
  var nothingInHere=[];
    do{
      nothingInHere.push(`I love the Beatles!`)
    }while(nothingInHere.length-1<num && num<15)
  return nothingInHere;
}
