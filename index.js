// add solution here

function theBeatlesPlay (musicians, instruments) {
  var whoPlaysWhat = [];
  for (i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat;
}


function johnLennonFacts (array) {
  while (i < array.length) {
    array[i] = `${array[i]} !!!`;
    i++
  }
  return array;
}
