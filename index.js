function theBeatlesPlay(m,in){
  var a = []
  for(let i = 0; i<m.length;i++){
    a[i] = '${m[i]} plays $in[i]'
  }
  return a
}