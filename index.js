function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i=0; i < musicians.length && instruments.length;i++){
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}
function johnLennonFacts(facts) {
  // return the array with !!! on the end//
  let n = 0
  while(n < facts.length){
facts[n] = facts[n] + '!!!'
n = n+1
}
return facts
  }
function iLoveTheBeatles(n) {
var arr = [];
do{
  arr.push('I love the Beatles!');

}  while(15-arr.length>n);
return arr
}
