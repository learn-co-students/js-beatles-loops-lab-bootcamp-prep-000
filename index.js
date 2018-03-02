function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for(i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
  console.log(arr)
}
