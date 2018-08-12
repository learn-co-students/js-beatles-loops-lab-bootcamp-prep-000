// add solution here
const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
 function theBeatlesPlay(players, instruments) {
     var allPlayers = [];
     for (var i=0; i < players.length; i++) {
         allPlayers.push(players[i] + " plays " + instruments[i]);
     }
     return allPlayers;
 }

 function johnLennonFacts(facts) {

     var nfacts=[];
     var i = 0;

   while(i<facts.length)
   {

     nfacts[i]=(facts[i]+"!!!");
     i++;
   }
   return nfacts;
 }

 function iLoveTheBeatles(num)
 {
     var love = [];
     do {
         love.push("I love the Beatles!");
         num++;
     } while (num < 15);

     return love;
 }
