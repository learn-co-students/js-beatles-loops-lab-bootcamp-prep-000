function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  arrayOfMusicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  arrayOfInstruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  var arrayOfStatement = [];
  for(var i = 0; i < arrayOfInstruments.length; i++){
    arrayOfStatement.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]);
  }
  return arrayOfStatement;
}
function johnLennonFacts(arrayOfFacts){
  arrayOfFacts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newArrayOfFacts = [];
  var i = 0;
  while(i < arrayOfFacts.length){
    newArrayOfFacts.push(arrayOfFacts[i] + "!!!");
    i++;
  }
  return newArrayOfFacts;
}
function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return array;
}