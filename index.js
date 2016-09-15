function theBeatlesPlay(muso, instr){
	var arr = [];
  for(var i = 0; i < muso.length; i++){
  	arr[i] = muso[i] +' plays '+ instr[i];
  }
  return arr;
}

function johnLennonFacts(array){
	var i = 0;
	while (i < array.length){
  	array[i] += '!!!'
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
	var arr = [];
  do {arr.push('I love the Beatles!'); num++}
  while(num < 15);
  return arr;
}
