function theBeatlesPlay(musicians, instruments){
  var array = new Array()
  for(var i=0; i<4 ;i++)
  {
    var string1 = musicians[i]
    var string2 = instruments[i]
    array[i] = string1 +" plays " +string2
  }
  return array
}

function johnLennonFacts(facts){
  var i=0
  var l = facts.length
  while(i<l){
    
    facts[i]=facts[i]+"!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  var i=n
  do{
    array[n-i]="I love the Beatles!"
    n++
  }while(n<15)
  return array
}
