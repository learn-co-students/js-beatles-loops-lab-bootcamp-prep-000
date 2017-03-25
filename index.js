function theBeatlesPlay( musicianArr, instrumentArr ) {
  var newArr = new Array();

  for( let i = 0; i < musicianArr.length; i++ ) {
    let string = musicianArr[i] + ' plays ' + instrumentArr[i];
    newArr.push(string);
  }

  return newArr
}

function johnLennonFacts( array ) {
  const newArr = new Array();
  let count = 0;
  while( count < array.length ) {
    let string = array[count] + '!!!';
    newArr.push(string);
    count++;
  }
  return newArr
}

function iLoveTheBeatles( number ) {
  const newArr = new Array();
  let string;
  do {
    string = "I love the Beatles!";
    newArr.push(string);
    number++;
  }
    while( number < 15);
  return newArr
}
