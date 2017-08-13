function theBeatlesPlay(musicianArray, instrumentArray){
  var array=[]
  var mArray = musicianArray
 var iArray = instrumentArray
 for (let i = 0; i < instrumentArray.length; i++ ) {
   array.push((musicianArray[i]) + ' plays ' + (instrumentArray[i]))
 }
 return array
  }




  function johnLennonFacts(johnLennonFacts) {
    let i = 0
    while (i < johnLennonFacts.length) {
      johnLennonFacts[i] = johnLennonFacts[i]+ '!!!'
      i++

    }
    return johnLennonFacts

  }



function iLoveTheBeatles(num){
  var love =[];
do { love.push('I love the Beatles!');
++num
} while (num < 15)
return love
}
