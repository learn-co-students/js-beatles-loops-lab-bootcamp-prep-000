function theBeatlesPlay(musicians, instruments){

  var length=musicians.length
  var combinedarr=[]


  for(let i=0; i<length; i++){

      var addelement=musicians[i]+" plays "+instruments[i]
      combinedarr=[...combinedarr, addelement]

  }

  return combinedarr

}

function johnLennonFacts(facts){

var num=facts.length
var i=0

while(num>0){

facts[i]=facts[i]+"!!!"
i++
num--

}

return facts

}

function iLoveTheBeatles(num){





  if(num>15){

    var beatlesLove=["I love the Beatles!"]
    return beatlesLove

  }else{

    var beatlesLove=[]

  while(num<15){

    beatlesLove=[...beatlesLove, "I love the Beatles!"]
    num++

  }

  return beatlesLove
}


}
