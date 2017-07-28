var musicians = ["jack","john"];
var instruments = ["flute","guitar"];
var facts = ["he likes to eat", "he likes kittens"]

function theBeatlesPlay(musicians,instruments){
  var list = [];
for (var i = 0; i < musicians.length; i++)
{list.push(musicians[i] + " plays " + instruments[i])}
return list;
}

function johnLennonFacts(facts){
var facts_exclaimed = [];
var i = 0;
while (i < facts.length){
  facts_exclaimed.push(facts[i]+"!!!")
  i++;
}
return facts_exclaimed
}

function iLoveTheBeatles(num){
 var shout_love = []
 if (num < 15){
   do {
  shout_love.push("I love the Beatles!");
   num --;
 } while (num>=0);
 }
 else {shout_love.push("I love the Beatles!");
 }
  return shout_love;
}
