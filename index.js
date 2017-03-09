
function theBeatlesPlay (musicians, instruments) {
    let array = []
    let i
    for (i = 0; i < musicians.length; i++) {
      array.push (musicians[i] + " plays " + instruments[i])
    }
    return array
}

function johnLennonFacts (facts){
 for (var i=0; i<facts.length; i++){
   facts[i] = facts[i] + "!!!";
 }
 return facts
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push ("I love the Beatles!")
    number++
  } while (number<15);
  return arr
}
