function theBeatlesPlay(musicians,instruments){
  var musicList = []
  for (let i = 0; i < musicians.length; i++){
    musicList.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicList
}

function johnLennonFacts(array){
  var i = 0
  while (i < array.length){
    array[i] = array[i]+"!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  var loveBeats = []
  do{
    loveBeats.push("I love the Beatles!")
    number++
  } while(number < 15)
  return loveBeats
}
