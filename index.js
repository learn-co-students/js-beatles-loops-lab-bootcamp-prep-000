// add solution here
// const lennon facts


function theBeatlesPlay(musicians, instruments) {
  const music = []
    for(let i = 0; i < musicians.length; i++ ) {
    music.push(`${musicians[i]} plays ${instruments[i]}`)
}
return music
}

function johnLennonFacts(facts){
  const info = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "he was a choir boy and a boy scout",
    "He hated teh sound of his own voice"
    ];
  let i = 0
  while (i < info.length) {
    info.push(`${info[i]}!!!`)
    i++
  }
  return info
}
