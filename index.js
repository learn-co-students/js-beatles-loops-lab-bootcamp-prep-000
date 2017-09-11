var arrayMusicians=[]
var arrayInstruments=[]
var array=[]
function theBeatlesPlay(arrayMusicians,arrayInstruments){
  for (var i=0; i<arrayMusicians.length; i++){
  array=[...array,arrayMusicians[i]+" plays "+arrayInstruments[i]]
  // array=[...array,`${arrayMusicians[i]}`+" plays "+`${arrayInstruments[i]}`]
  }
return array
}

 var facts=[]
// var i=0
function johnLennonFacts(facts){
  var i=0
  while (i<facts.length) {
    facts[i]=facts[i]+"!!!"
    i++
  }
return facts
}

// var number=0
function iLoveTheBeatles(number){
var array1=[]
  do{
  array1=[...array1,"I love the Beatles!"]
  number++
  } while(number<15)
 return array1
}
