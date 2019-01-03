
// add solution here

function theBeatlesPlay(musicians,instruments) {
  const array= [] ;
  const x = musicians;
  const y = instruments;
  var length=x.length;
  for( let i=0;i<length;i++)
  {
    array.push(`${x[i]} plays ${y[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  const temp =[];
  let i=0;
  const x=array.length;
    while(i<x) {
    temp.push(`${array[i]}!!!`);
    i++;
  }  
  return temp;
}


function iLoveTheBeatles(n) {
  const arr = [];

  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return arr;
}
