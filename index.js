function theBeatlesPlay( musicianArr, instrumentArr ) {
  var newArr = new Array();

  for( let i = 0; i < musicianArr.length; i++ ) {
    newArr.push(`${musicianArr[i]} plays ${instrumentArr[i]}`)
  }

  return newArr
}

function johnLennonFacts( array ) {
  const newArr = new Array();
  let count = 0;

  while( count < array.length ) {
    newArr.push(`${array[count]}!!!`);
    count++;
  }
  return newArr
}

function iLoveTheBeatles( number ) {
  const newArr = new Array();
  let string;
  do {
    newArr.push("I love the Beatles!");
    number++;
  }
    while( number < 15);
  return newArr
}
