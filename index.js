function theBeatlesPlay(musicians, instruments){
  var array=[]
  for (var i=0;i<=3;i++){
    array.push(musicians[i]+" plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(arg) {
    var i = 0
    var solution = []
    while (i < arg.length) {
      solution.push(arg[i] + "!!!")
      i=i+1
    }
    return solution
  }

function iLoveTheBeatles(number){
  var solution = []
  do{
    solution.push(`I love the Beatles!`)
    number=number+1
  }
  while (number<15);
  return solution
}
