var theBeatlesPlay = function(musicians, instruments){
  var array = [];
  for(var i=0; i < musicians.length;i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {var _loopStart = Date.now(),_loopIt = 0;
  debugger;
  var newArr = [];
  var i = 0;
  console.log(i);
  console.log(facts.length);setTimeout(function () {_loopStart = Infinity;});
  while (i < facts.length) {if (++_loopIt > 5000 && Date.now() - _loopStart > 150) throw new RangeError("Potential infinite loop. You can disable this from settings.");
    newArr.push(facts[i] + "!!!");
    i++;
  }
  return newArr;
}
var iLoveTheBeatles = function(n){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    n++;
  }while (n < 15);
  return arr;
}
