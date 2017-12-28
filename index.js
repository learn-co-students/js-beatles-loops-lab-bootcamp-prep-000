function theBeatlesPlay(musicians, instruments){
  var newray = []
  for (var i = 0; i < musicians.length; i++){
    var string = (musicians[i] + " plays " + instruments[i])
    newray.push(string)
  }
  return newray
}

function johnLennonFacts(array){
  var i = array.length-1
  while(i>=0){
    array[i] = array[i]+ '!!!'
    console.log(--i)
  }
  return array
}

function iLoveTheBeatles(number){
  var ray = []
  do{
    ray.push("I love the Beatles!")
    number = number+1
  } while (number < 15)
  return ray
}