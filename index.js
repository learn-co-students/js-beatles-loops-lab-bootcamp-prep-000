// add solution here
function theBeatlesPlay(musicans,instruments){
  var arr = [];
  var str = " ";
  for (let i = 0; i < musicans.length; i++){
     arr.push(musicans[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(array){
  let i=0 ;
  let arr = [];
  while ( i<array.length){
    arr.push(array[i]+"!!!");
    i++;
  }
   return arr;
}

function iLoveTheBeatles(num){
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return arr;
}