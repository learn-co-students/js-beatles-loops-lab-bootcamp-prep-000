// add solution here
function theBeatlesPlay(array_m, array_i){
  var newArray = [];
  for(var i = 0; i < array_m.length; i++){
      //var text = array_m[i] + ' plays ' + array_i[i];
      var text = `${array_m[i]} plays ${array_i[i]}`;
      newArray.push(text);
  }
  return newArray;
}

function johnLennonFacts(array){
  for(var i = 0; i < array.length; i++){
    //array[i] = array[i] + '!!!';
    array[i] = `${array[i]}!!!`;
  }
  return array;
}

function iLoveTheBeatles(n){
  var newArray = [];
  do{
    n += 1;
    newArray.push("I love the Beatles!");
  } while (n < 15)
  return newArray;
}