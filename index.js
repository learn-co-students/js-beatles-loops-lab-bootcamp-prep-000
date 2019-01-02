var lonely_hearts_club = []

function theBeatlesPlay(musician, instrument) {
  for (let i = 0; i < musician.length; i++) {
    lonely_hearts_club.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return lonely_hearts_club
}
function johnLennonFacts(array) {
  let i = 0;
  while (i < array.length) {
    array[i] = array[i] + '!!!';
    i++
  }
  return array
}
function iLoveTheBeatles(number) {
  let the_fans_say = []
  do {
    the_fans_say.push('I love the Beatles!')
    number++
  } while (number < 15);
  return the_fans_say
}
