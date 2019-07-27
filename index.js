// add solution here
function theBeatlesPlay(arrayMusic, arrayInst) {
  var beatlesmusic = [];
  for (let i = 0; i < arrayMusic.length; i++) {
    beatlesmusic.push(`${arrayMusic[i]} plays ${arrayInst[i]}`);
  }
  return beatlesmusic;
}
function johnLennonFacts(array) {
  var i = 0;
  var facts = [];
  while(i < array.length) {
    facts.push(`${array[i]}!!!`);
    i++;
  }
  return facts;
}
function iLoveTheBeatles(num) {
  var music = [];
  do {
    music.push('I love the Beatles!');
    num++;
   } while(num < 15);
   return music;
}
