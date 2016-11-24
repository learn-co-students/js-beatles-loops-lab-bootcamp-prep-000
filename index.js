var theBeatlesPlay = (xs, ys) =>
  xs.reduce((xs, x, y) => {
    xs.push(`${x} plays ${ys[y]}`)
    return xs
  }, [])

var johnLennonFacts = xs =>
  xs.map( x => x + '!!!')

var iLoveTheBeatles = x => {
  var xs = new Array(8).fill().map( x => x = 'I love the Beatles!')
  return x == 7 ? xs : xs.splice(0, 1)
}
