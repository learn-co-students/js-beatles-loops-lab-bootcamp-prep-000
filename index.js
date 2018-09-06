// add solution here
function theBeatlesPlay(mus, ins){
  
  var arr = [];
  for(var i = 0 ; i < mus.length ; i++){
    arr.push(`${mus[i]} plays ${ins[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr){
  var count = 0;
  var facts = "!!!";
  while(count < arr.length){
    arr[count] = arr[count]+facts;
    count++
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  }while(num < 15)
  return arr;
}