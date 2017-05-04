//var musicians = [];
//var instruments = [];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(array){
  var newarray = [];
  let i = 0;
  while (i<array.length){
    newarray.push(array[i]+"!!!");
    i++;
  }
  return newarray;
}

function iLoveTheBeatles(number){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  }
    while (number < 15);
    return newArray;
}
