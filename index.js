//More Looping

function theBeatlesPlay(musicans, instruments){

    var testArray = []


    for (var i = 0; i < musicans.length; i++) {

      var string = `${musicans[i]} plays ${instruments[i]}`
      testArray = [...testArray, string]
    }
    return testArray
}

function johnLennonFacts(facts){

    var testArray = []
    var string = "!!!"
    var i = 0

    while (i < facts.length) {

      facts[i] = `${facts[i]}${string}`
      testArray = [...testArray, facts[i]]
      i++
    }
      return testArray
}

function iLoveTheBeatles(number){

    var testArray = []
    do {
      var string = "I love the Beatles!"
      testArray.push(string)
      ++number

    } while(number < 15);

    return testArray

}
