function theBeatlesPlay(arrMuscian, arrinstrument){
  var empt = [];
  for (let i = 0; i < arrMuscian.length && i < arrinstrument.length; i++){
    empt.push(`${arrMuscian[i]} plays ${arrinstrument[i]}`);
  }
  
  console.log(empt);
  return empt;
}

function johnLennonFacts(array){
  var i = 0;
  var k;
  while(i < array.length){
    k = array.map(function(x){
      x = x + "!!!";
      return x;
    });
    i++;
  }
  console.log(k);
  return k;
}

function iLoveTheBeatles(number){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
    console.log(number);
  }while(number < 15);
  return arr;
}