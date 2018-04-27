function theBeatlesPlay(mus,ins){
  var newArr = []
  for(let i=0; i<mus.length;i++){
    newArr.push(mus[i] + " plays " + ins[i])
  }return newArr
}
theBeatlesPlay()

function johnLennonFacts(facts){
  var array = []
  var i = facts.length-1
  while(i>=0){
    array.unshift(facts[i] + '!!!')
      i--
  } return array
}
johnLennonFacts()


function iLoveTheBeatles(num){
  var result = []
  var i = 0
   do
   {
      result.push("I love the Beatles!")
      i++

    }
      while (i <= num && num < 15)
      return result
  }



iLoveTheBeatles()
