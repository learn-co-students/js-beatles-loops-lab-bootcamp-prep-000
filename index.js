function theBeatlesPlay(musicians, instruments){
  var array=[];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array){
  var factsarray=[];
  var n=0
  while(n<array.length){
    factsarray.push(array[n]+'!!!');
    n++;
  }
  return factsarray
}

function iLoveTheBeatles(n){
  var emptyArr=[]
  do {
    emptyArr.push("I love the Beatles!")
    n++
  } while (n<15)
  return emptyArr
}
