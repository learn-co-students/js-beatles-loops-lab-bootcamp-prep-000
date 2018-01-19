function theBeatlesPlay(musicians, instruments) {
   let players = [];
   for (let i = 0; i < musicians.length; i++) {
      players.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return players;
}

function johnLennonFacts(facts) {
   for (let i = 0; i < facts.length; i++) {
      facts[i] += "!!!";
   }
   return facts;
}

function iLoveTheBeatles(num) {
   let arr = [];
   do {
      arr.push("I love the Beatles!");
      num++;
   } while (num < 15);
   return arr;
}
