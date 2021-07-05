// add solution here
function theBeatlesPlay(musicians, instruments){
  var got = []
  // var arLength = musicians.length
  for(var i=0; i<musicians.length; i++ ){
    var our = `${musicians[i]} plays ${instruments[i]}`;
    //var our = musicians[i]+ 'plays'+ instruments[i]
    got.push(our);
  }
  return got;
}

function johnLennonFacts(array){ //facts
  var i =0
  while(i < array.length){
    array[i] = `${array[i]}!!!`
    i +=1
  }
  return array;
}

function iLoveTheBeatles(n){
  var emVar = []
  do{
    emVar.push('I love the Beatles!')
    n++
  } while(n < 15)
  return emVar;
}