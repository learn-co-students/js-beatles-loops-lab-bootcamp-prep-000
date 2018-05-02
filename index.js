


function theBeatlesPlay(musicians, instruments) {
  var arr = []
  var pairs = {"John Lennon":"Guitar", "Paul McCartney":"Bass Guitar", "George Harrison":"Lead Guitar", "Ringo Starr":"Drums"}

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i]
    arr.push(`${musician} plays ${pairs[musician]}`);
  }
  return arr
}

function johnLennonFacts(facts) {
  var arr = []
  var i = 0
  while(facts.length > i){
    var fact = facts[i]
    arr.push(`${fact}!!!`)
    i++;
  }
  return arr
}


function iLoveTheBeatles(num){
  var arr = []
  var str = "I love the Beatles!"
  
  do{
    arr.push(str);
    num--;
  }
  while(num >= 0 && num < 15);
  return arr
}