function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i=0; i<musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  let i=0;
  var array = [];
  while (i < facts.length) {
    array.push(`${facts[i]}` + '!!!')
    i++;
  }
  return array
}

function iLoveTheBeatles(n) {
  var love = [];
  if (n<15) {
    for (let i=0; i<=n; i++)
    love.push("I love the Beatles!") // n times
  } else {
    love.push("I love the Beatles!") // 1 time
  }
  return love
}
