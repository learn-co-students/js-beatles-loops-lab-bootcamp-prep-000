var musicians = ["John", "Paul", "George", "Ringo"];
var instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments)
{
  var playsArray = [];
  //Note to self. Had to put "i" in .push instead of "0".
  for (var i = 0; i < musicians.length; i++)
  {
    playsArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playsArray;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  
function johnLennonFacts(facts)
{
  var newFactsArray = [];
  var i = 0;
  while (i < facts.length)
  {
    newFactsArray.push(facts[i] + "!!!");
    i++;
  }
  return newFactsArray;
}

function iLoveTheBeatles(number)
{
  var loveArray = []
  
  do
  {
    loveArray.push("I love the Beatles!")
    number++;
  }while (number < 15)
  
  return loveArray;
}