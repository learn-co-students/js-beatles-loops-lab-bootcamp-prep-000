function theBeatlesPlay(musicians, instruments){
  var temp = [];
  for (var i = 0; i < musicians.length; i++){
   temp[i] = `${musicians[i]} plays ${instruments[i]}`
  }return temp
}
function johnLennonFacts(arg){
  var i = 0
  var temp = []
  while(i < arg.length){
    temp[i] = arg[i] + "!!!"
    i++
  }return temp
}
function iLoveTheBeatles(num){
  var temp = ["I love the Beatles!"]
  if (num < 15){
    for(var i = 0; i < num; i++){
      temp.push("I love the Beatles!")
    }
  }return temp
}