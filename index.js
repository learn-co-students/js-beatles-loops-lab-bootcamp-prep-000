function theBeatlesPlay(arrayOfMuscians,arrayOfInstruments){
  var myArr = [];
  for (var i=0, len=arrayOfMuscians.length; i< len; i++){
    myArr.push(arrayOfMuscians[i]+" plays "+arrayOfInstruments[i])
    }
  return myArr
}

function johnLennonFacts(facts){
  var bangLennonFacts = []
  var i = 0
  while (facts[i]){
    bangLennonFacts.push(facts[i]+"!!!")
    i++;
  }
  return bangLennonFacts
}

function iLoveTheBeatles(number){
  var howMuchILoveTheBeatles = [] //oh if only this stayed empty.
    do{
      howMuchILoveTheBeatles.push("I love the Beatles!")
      number++
      //[loopbody];
    } while (number !== 0 && number < 15)

      return howMuchILoveTheBeatles;
    }
