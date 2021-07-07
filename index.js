function theBeatlesPlay(musicians, instruments){
  var mus = []
  var str = ""
  for (var i = 0; i < musicians.length; i++){
    str = musicians[i] + " plays " + instruments[i]
    mus = [...mus, str]
    // mus = [...mus, musicians[i] + "plays" + instruments[i]]
  }
  return mus
}

function johnLennonFacts(fac){
 var i = 0
 while (i < fac.length) {
    fac[i]= fac[i] + "!!!"
    i++
  }
 return fac
}

function iLoveTheBeatles(num){
  var b = []
  do {
    num = num + 1; //This code will add value 1 to the num variable until reaches the condition to //stop the loop
    b.unshift("I love the Beatles!");
    } while (num < 15);
 return b
}