function theBeatlesPlay(musicians,instruments) {
  var array = []
  
  for (let i = 0; i < musicians.length; i++ ){
    var mus = musicians[i]
    var inst = instruments[i]
    
    array.push(`${mus} plays ${inst}`)
  }
  return array
}

function johnLennonFacts(array){
  var i = 0
  while(i < array.length) {
    array[i] = array[i] + '!!!'
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  
  do {
    array[i] = ("I love the Beatles!")
    i++
    number++
  } while 
    (number < 15)
    return array
}  