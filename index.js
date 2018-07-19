function theBeatlesPlay(music, instr){
  var empty = [];
  for (let x = 0; x < music.length; x++){
    empty.push(`${music[x]} plays ${instr[x]}`)
  }
  return empty;
}
function johnLennonFacts(array){
  let empty = [];
  let x = 0;
  while(x < array.length){
    empty.push(`${array[x]}!!!`);
    x+=1;
  }
  return empty;
}

function iLoveTheBeatles(number){
  var empty = [];
  do {
    empty.push(`I love the Beatles!`);
    number+=1;
    } while(number < 15);
    return empty;
}