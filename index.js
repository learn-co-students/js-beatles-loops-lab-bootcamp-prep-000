

function theBeatlesPlay(musicians, instruments){
  var musicians = ["John Lennon", "Bob Dylan", "Melissa Etheridge", "Your Mom"];
  var instruments = ["guitar", "oboe", "penguin", "penis"];
  var newArray = [];

  for ( var i = 0; i < musicians.length; i++ ) {
    newArray.push(musicians[i] + " plays the " + instruments[i]);
  }
    return newArray;
}


function johnLennonFacts(){
  const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  const newFacts = [];
  var i = 0;
  while (i < facts.length){
      newFacts.push(facts[i] + "!!!")
      i++
}
  return newFacts;
}



function iLoveTheBeatles(number){
  var loveBeatles = [];
        var phrases = [];
        do {
        phrases.push("I love the Beatles!");
        number++;
      } while ( number < 15);

    return loveBeatles;
};
