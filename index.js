function theBeatlesPlay(arrayMus,arrayInst) {
    
    var newArray = [];
    for (var i= 0; i < arrayMus.length; i++) {
     newArray.push(`${arrayMus[i]} plays ${arrayInst[i]}`);
    }
return newArray;
}

function johnLennonFacts(array) {
  var i = 0;
  var newArray=[];
  while (i < array.length){
    newArray.push(array[i] + "!!!"); i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
    var newArray = [];
    do {newArray.push("I love the Beatles!"); number++;
        
    }while (number < 15);
  return newArray;
}
