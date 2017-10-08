function theBeatlesPlay(musicians, instruments){
var strings = []
for (let i=0; i<musicians.length; i++) {
strings.push(`${musicians[i]} plays ${instruments[i]}`)
}
return strings
}

function johnLennonFacts(facts){
  let i=0
  while (i<facts.length){
facts[i]+="!!!"
i++
}
  return facts
}

function iLoveTheBeatles (number) {
  var array=[]
do{
array.push("I love the Beatles!")
++number
}
while(number<15)
return array
}
