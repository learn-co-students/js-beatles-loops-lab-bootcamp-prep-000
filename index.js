
function theBeatlesPlay(musicians, instruments){
  
var  playlist= []

for(var i = 0; i < 4; i++)
{
  playlist.push(musicians[i] + " plays " + instruments[i]);
  }
return playlist
}

// facts = ['lauren', 'rosa', 'rhino']
function johnLennonFacts(input_facts){
var i= 0;

while (i < input_facts.length)
{
input_facts[i] + "!!!"; //  'rosa!!!!!!!!!!!!!!!'
i++;
}
return input_facts
}

function iLoveTheBeatles(num){
  var whoKnows = []
  do {
    whoKnows.push("I love the Beatles!");
    num++;
      } while (num<15);
      return whoKnows
}