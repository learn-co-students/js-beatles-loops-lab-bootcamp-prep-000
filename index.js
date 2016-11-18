function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for(let i = 0; i < musicians.length; i++){
    var combo = `${musicians[i]} plays ${instruments[i]}`;
    newArr.push(combo);
  }
  return newArr;
}

function johnLennonFacts(array){
  var i = 0;
  var newArr2 = []
  while(i < array.length){
    var exclam = `${array[i]}!!!`;
    newArr2.push(exclam)
    i++;
  }
  return newArr2;
}

function iLoveTheBeatles(number){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return arr;
}
