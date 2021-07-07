
function theBeatlesPlay(arrayofMusicians,arrayofInstruments){
  var array = []
  for (var i=0 ; i<arrayofInstruments.length; i++){
  array.push(`${arrayofMusicians[i]} plays ${arrayofInstruments[i]}`)
  }
return array
}

function johnLennonFacts(facts){
  var array = []
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles (num){
 var array = []
  var i = num
  function incrementVariable(){
    i = i + 1;
    return i
  }
 do{
   array.push(`I love the Beatles!`)
 } while (incrementVariable()<15);
 return array
}