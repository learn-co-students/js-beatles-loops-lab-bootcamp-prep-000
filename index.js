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
function johnLennonFacts(array){
  while(1 < array.length){
    array[i--] = `${array[i--]}!!!`
    return array;
  }
}