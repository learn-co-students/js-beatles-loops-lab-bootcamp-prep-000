function theBeatlesPlay(musicians, instruments){
var array = []

for(let counter = 0; counter < musicians.length; counter++){
array.push(musicians[counter] + " plays " + instruments[counter])
}

return array
}

function johnLennonFacts(facts){
var count = 0
while (count < facts.length){
  facts[count] = facts[count] + "!!!"
  count++
}
return facts
}

function iLoveTheBeatles(num){
var array=[]
do{
  array.push("I love the Beatles!")
  num++
} while(num<15)
return array
}
