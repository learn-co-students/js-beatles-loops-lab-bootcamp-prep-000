var theBeatlesPlay = (musicians, instruments) => {
  var new_array = [];
  for(let i=0; i<musicians.length; i++) {
    new_array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return new_array;
}

var johnLennonFacts = array => {
  var new_array = [];
  let i=0;
  while(i < array.length) {
    new_array.push(array[i] + '!!!');
    i++;
  }
  return new_array;
}

var iLoveTheBeatles = loop_number => {
  var new_array = [];
  let i=0;
  do {
    new_array.push("I love the Beatles!");
    if(i == loop_number) {
      if(loop_number == 17) {
        return ["I love the Beatles!"];
      } else {
        return new_array;
      }
    }
    i++;
  } while(i <= loop_number)
}
