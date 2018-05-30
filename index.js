function theBeatlesPlay(musicians, instruments){
  var allmusicians = []
for (var i = 0; i < musicians.length; i++) {
  allmusicians.push(musicians[i] + " plays " + instruments[i])
}
return allmusicians
}

        
function johnLennonFacts(array) {
  var i = 0
  while (i< array.length) {
    array[i] += '!!!'
    i++;
}
return array;
}

function iLoveTheBeatles(n) {
  var arr = []
  var i = 0
do  {arr.push('I love the Beatles!')
i++;
}
while(i <= n && n < 15)
return arr
}
