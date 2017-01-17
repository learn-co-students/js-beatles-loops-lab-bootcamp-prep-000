function theBeatlesPlay(musicians,instruments){
  var emptyarray = [];
  for (let i=0; i<musicians.length; i++){
    emptyarray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return emptyarray;
}

function johnLennonFacts(array){
  var counter = 0;
  while (counter < array.length){
    array[counter] += "!!!";
    counter++;
  }
  return array
}

function iLoveTheBeatles(number){
  var emptyarray = [];
  do {
    emptyarray.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return emptyarray;
}
