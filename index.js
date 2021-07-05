function theBeatlesPlay(musicians, instruments){
  var test = [];

  for(var i = 0; i < musicians.length; i++) {
    test.push (`${musicians[i]} plays ${ instruments[i]}`);
  }
  return test;
}

function johnLennonFacts (facts){
  var x = 0;
  var str = [];

  while (facts[x]) {
    str.push (facts[x] + "!!!");
    x++;
  }
  return(str);
}

function iLoveTheBeatles(number) {
  var z = [];
  
  function incrementVariable(){
    number++;
    return number;
  }
  
  do {
    z.push ("I love the Beatles!");
  }
  while (incrementVariable()<15);
  
  return (z);
}

