function theBeatlesPlay(musicians, instruments){
  let band =[]
  for(let i = 0; i < musicians.length; i++){
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}
