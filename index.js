// add solution here
// test 1
const theBeatlesPlay = (artists, instrument) => {
  let sentArr = [];
  artists.forEach(artist => {
    let inst = artists.indexOf(artist)
    sentArr.push(`${artist} plays ${instrument[inst]}`);
  });
return sentArr
};


//test 2

const johnLennonFacts = (array) => {
  let revArray = [];

  array.forEach(item => {
    item = item + '!!!';
    revArray.push(item);
  });
  return revArray;
};

//test 3
const iLoveTheBeatles = (num) => {
  let phrase = 'I love the Beatles!'
  let phraseArr = [];
  let counter = 0


  do {
    phraseArr.push(phrase);
    counter +=1
  }
  while (counter <= num && num <15);
  return phraseArr;
};
