// add solution here
const theBeatlesPlay = (musicians, instruments) =>{
  const tempArr = [];
  for (let i = 0; i < musicians.length; i++){
    tempArr.push(musicians[i] + ' ' + 'plays ' + instruments[i]);
  }
  return tempArr;
};

const johnLennonFacts = arr => {
  let i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + '!!!';
    i++;
  }
  return arr;
};

const iLoveTheBeatles = num => {
  let tempArr = [];
  let text = 'I love the Beatles!';
  let i = 0;
  if (num < 15){
    do {
      tempArr.push(text);
      i++;
    } while (i < (15 - num));
    
  } else {
    tempArr.push(text);
  } 
  
  return tempArr;
  };
  
