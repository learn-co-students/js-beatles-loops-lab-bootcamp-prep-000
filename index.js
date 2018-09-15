function theBeatlesPlay(musicians,instruments){
let array = [];
for (let i=0; i<musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array;
}

