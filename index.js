function theBeatlesPlay(musicians, instruments) {
  var array = [];
    for (let i = 0; i < musicians.length; i++) {
      
      array.push(musicians[i] +" plays "
        +  instruments[i] )
      
    }
 return array

}
        
function johnLennonFacts(array) {
  var i = 0
  var facts = [];
  while(i < array.length) {
    array.push(array[i] + "!!!") 
    i++
    }
  return facts
}

