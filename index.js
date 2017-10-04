var theBeatlesPlay = function(musicians, instruments) {
  var array = [];
  for (var i=0; i < musicians.length; i++) {
    for (var i=0; i < instruments.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);  
    }
  }
  return array;
};

var johnLennonFacts = function(arr){
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
  new_arr.push(arr[i] + "!!!");
}
  return new_arr;
};

var iLoveTheBeatles = function(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n += 1;
  } while (n < 15);
  return array;
};