function theBeatlesPlay(arrMusicians, arrInstruments){
    var theBeatlesPlay = [];
    var str = "";
    for (var i=0;i<arrMusicians.length;i++){
      str = arrMusicians[i]+" plays "+ arrInstruments[i]
      theBeatlesPlay.push(str)
    }
    return theBeatlesPlay;
}


function johnLennonFacts(facts){

  var newArr = [];
  var i=0;
  console.log(i)
  console.log(facts.length)
  while (i < facts.length){
      newArr.push(facts[i]+"!!!");
      i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  var newArr = [];
  do {newArr.push('I love the Beatles!')
      num++
    }
    while (num<15)

  return newArr;
}
