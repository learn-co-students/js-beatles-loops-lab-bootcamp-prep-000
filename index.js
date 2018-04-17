function theBeatlesPlay(arrayMusic, arrayArtist){
  let newArray = [];
  for(let i = 0; i < arrayMusic.length; i++){
    newArray.push(`${arrayMusic[i]} plays ${arrayArtist[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array){
  let length = array.length;
  let i = 0;
  const beatlesArray = [];
  while(i < length){
    beatlesArray.push(array[i] + "!!!");
    i++;
  }
  return beatlesArray;
}

function iLoveTheBeatles(number) {
  const loveArray = [];
  const slogan = "I love the Beatles!";
  let counter = number + 1;
  do {
    loveArray.push(slogan);
    counter--;
  } while (counter < 15 && counter > 0)
  return loveArray;
}
