// add solution here

function theBeatlesPlay (musicians, instruments) {
  var whoPlaysWhat = [];
  for (let i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat;
}


function johnLennonFacts (array) {
  let i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++
  }
  return array;
}

function iLoveTheBeatles (number) {
  var x = [];
  do {
    x.push("I love the Beatles!");
    number++
  } 
  while (number < 15);
  return x;
}