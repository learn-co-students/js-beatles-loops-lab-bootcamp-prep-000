function theBeatlesPlay(arrMu, arrIn){
  var array = [];
  for(var i = 0; i< arrMu.length; i++){
    array.push(`${arrMu[i]} plays ${arrIn[i]}`);
  }
  return array;
}

function johnLennonFacts(arrayF){
  var i = 0;
  while(i < arrayF.length){
    arrayF[i] = `${arrayF[i]}!!!`;
    i++;
  }
  return arrayF;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push('I love the Beatles!');
    number ++;
  } while(number < 15);
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push('I love the Beatles!');
    number ++;
  } while(number < 15);
  return array;
}