// add solution here
function theBeatlesPlay(artist, instrument) {
  
  var arr=[];
  
  for (let i=0; i < artist.length; i++)  {
       arr.push(`${artist[i]} plays ${instrument[i]}`);
  }
return arr;
}

function johnLennonFacts(arr) {
  let i=0;
  while(i < arr.length) {
    arr[i] = arr[i] + '!!!';
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let arr=[];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while(num < 15);
  return arr;
}
