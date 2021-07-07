// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty_array = [];
  
  for (var i=0; i < musicians.length ; i++){
    empty_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return empty_array
}

function johnLennonFacts (facts) {
  var array = [];
  var i = 0
  while ( i< facts.length){
  array.push (facts[i] + "!!!")
  i+=1
  }
return array
}

function iLoveTheBeatles(num) {
  num = parseInt(num)
  var loveArray = []
function incrementVariable() {
num += 1;
}

do {
  loveArray.push("I love the Beatles!");
  incrementVariable();
} while (num < 15);
return loveArray
}