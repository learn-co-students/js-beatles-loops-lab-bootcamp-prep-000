// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay()
{
  var array= [];
  for (let i=0; i<4; i++)
    {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}

function johnLennonFacts(facts)
{
  var i=0;
  var jLennonFacts=[];
  while (i<facts.length)
  {
    jLennonFacts.push(`${facts[i]}!!!`);
    i=i+1;
  }
  return jLennonFacts;
}

function iLoveTheBeatles(i){
  var love = [];
  do
  {
    i++;
    love.push("I love the Beatles!");
  } while (i<15);
  return love;
}
