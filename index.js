  function theBeatlesPlay(musiciansArr, instrumentsArr) {
    let list = [];
    for (var i = 0; i < musiciansArr.length; i += 1) {
        list.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
    }
    return list;
  }
  
  
 function johnLennonFacts(factsArr) {
    let i = 0;
    while (i < factsArr.length) {
    //   factsArr[i].concat('!!!');
    factsArr[i] += '!!!'

      i++;
    }
    return factsArr
}


function iLoveTheBeatles(num) {
    let arr = [];
    do {
        arr.push("I love the Beatles!");
        num += 1;
    } while (num < 15)
    return arr
}
