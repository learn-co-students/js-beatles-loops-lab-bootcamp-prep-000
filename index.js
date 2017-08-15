function theBeatlesPlay(arrMusicians, arrIntruments){
  var myArr = []
  for (let i = 0; i< arrMusicians.length; i++){
    myArr.push(arrMusicians[i] + ' plays ' + arrIntruments[i])
  }

  return myArr
}

function johnLennonFacts(arrFacts){
  let i = 0;
  while(i < arrFacts.length){
    arrFacts[i] = arrFacts[i] + '!!!'
    i++
  }

  return arrFacts
}

function iLoveTheBeatles(counter){
  var myArr = []
  let i = counter;
  do{
    myArr.push("I love the Beatles!")
    i++
  } while( i < 15)

  return myArr
}
