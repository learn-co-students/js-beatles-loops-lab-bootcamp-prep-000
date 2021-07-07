function theBeatlesPlay(musicians,instruments){
 var array=[];
  for (let i=0; i<musicians.length;i++)
  {array.push(`${musicians[i]} plays ${instruments[i]}`)}
  return array
}

function johnLennonFacts(facts){
  var jLFacts=[];
  for (let i=0; i<facts.length;i++)
  {jLFacts.push(`${facts[i]}!!!`)}
    return jLFacts
}

/* or with a while loop
function johnLennonFacts(facts){
var newJohnFacts=[];
var i =0;
while(i<facts.length){
newJohnFacts.push(`${facts[i]}!!!`)
i++}
return newJohnFacts.join()} */

function iLoveTheBeatles(number){
  var array=[];
  var i=0
  do{array.push('I love the Beatles!')
  number++}
  while(number<15)
  return array
}