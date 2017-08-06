function theBeatlesPlay(musicians, instruments){
  var array = []

  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
    return array
}

function johnLennonFacts(array) {

var int = 0



    while(array.length > int) {
      array[int] = array[int] + "!!!"
      int = int  + 1


  }
          return array
}


function iLoveTheBeatles(n) {
  var array = []

    do {
      array.push("I love the Beatles!")
    } while (++n < 15)
      return array
}
