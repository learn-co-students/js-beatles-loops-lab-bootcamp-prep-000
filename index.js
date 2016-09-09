var theBeatlesPlay = function(mus, ins) {
  var array = [];
  for(var i =0; i < mus.length; i++) {
    var str = mus[i] + ' plays ' + ins[i];
    array.push(str);
  }
  return array;
}

var johnLennonFacts = function(arr) {
  var newFacts = [];
  for(var i = 0; i < arr.length; i++) {
    var str = arr[i] + '!!!';
    newFacts.push(str);
  }
  return newFacts;
}


var iLoveTheBeatles = function(n) {
  var array = [];
  do{
    array.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return array;
}
