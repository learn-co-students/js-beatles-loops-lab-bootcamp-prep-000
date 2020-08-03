var theBeatlesPlay = (musicians, instruments) => {
  return musicians.map((musician, index) => {
    return `${musician} plays ${instruments[index]}`
  })
}

var johnLennonFacts = facts => {
  // const result = []
  // let counter = 0
  // while (counter < facts.length) {
  //   result.push(`${facts[counter]}!!!`)
  //   counter += 1
  // }
  // return result
  return facts.map(fact => fact + '!!!')
}

var iLoveTheBeatles = number => {
  let array = []
  do {
    array.push('I love the Beatles!')
    number += 1
  } while (number < 15)
  return array
}
