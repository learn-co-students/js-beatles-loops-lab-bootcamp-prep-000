// add solution here
function theBeatlesPlay(musicians, instruments) {

 var musicianInstruments = [];

 for(var i = 0; i < musicians.length; i++) {
  var string = musicians[i] + " plays " +  instruments[i];
  musicianInstruments.push(string);
  }

return musicianInstruments;
}

function johnLennonFacts(array) {
var i = 0;

var newArr = [];
  while  (i < array.length) {
    //i++;
    var string =
    newArr.push(array[i] + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(number) {

var newArr = [];

do {
newArr.push("I love the Beatles!");
number++;
}
while (number < 15) ;
return newArr;

}
