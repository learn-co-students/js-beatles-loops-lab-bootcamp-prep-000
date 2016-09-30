function theBeatlesPlay (musicians, instruments){
  var arr = new Array()
  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i]
    arr.push(str)
  }
  return arr
}

function johnLennonFacts(facts){
  var arr = new Array()
  let i = 0
  while (i < facts.length){
    var str = facts[i] + "!!!"
    arr.push(str)
        i ++
        console.log(str)
  }
  return arr
}

function iLoveTheBeatles (n){
var arr = new Array()
do {
arr.push("I love the Beatles!")
n++
} while (n < 15)
return arr
}

