function theBeatlesPlay(arr1,arr2) {
  var emptArr = []
  for (var i = 0; i <arr1.length; i++) {
    emptArr.push(arr1[i] + " plays " + arr2[i])
  }
  return emptArr
}

function johnLennonFacts(facts) {
  var num = 0
  while (num < facts.length) {
    facts[num] = facts[num] + "!!!"
    num = num+1
  }
  return facts
}

function iLoveTheBeatles(num) {
  var empArr = []
  do {
    empArr.push('I love the Beatles!')
    num = num+1
  } while (num < 15);
  return empArr
}
